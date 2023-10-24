const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const session = require('express-session');
const nunjucks = require('nunjucks');
const rfs = require('rotating-file-stream');
const dotenv = require('dotenv');
const passport = require('passport');

const {sequelize} = require('./models');
const passportConfig = require('./passport');


dotenv.config();

const app = express();
passportConfig();

const pageRouter = require('./routes/page');


var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', //하루마다 rotate
    path: path.join(__dirname, 'log')
});

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {express:app, watch:true});
sequelize.sync({ force: false})
.then(() => {
    console.log('데이터베이스 연결 성공');
})
.catch((err)=> {
    console.error(err);
});


//에러만 콘솔에 출력
app.use(morgan('dev', {
    skip: function( req, res )  {
        return  res.statusCode <400
    }
}));
//모든 요청 로그들은 access.log에 저장
app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure:false,
    },
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/',pageRouter);

app.use((req, res, next)=> {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});


app.use((err, req, res, next)=> {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production'? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});