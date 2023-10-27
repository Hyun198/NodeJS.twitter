const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

exports.join = async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {
      const exUser = await User.findOne({ where: { email } });
      if (exUser) {
        return res.redirect('/join?error=exist');
      }
      const hash = await bcrypt.hash(password, 12);
      await User.create({
        email,
        nick,
        password: hash,
      });
      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }
};

exports.login = (req,res,next)=>{
    passport.authenticate('local', (authError, user, info) =>{
        if(authError) {
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.redirect(`/?error=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req,res,next);
};

exports.logout =(req,res)=>{
    req.logout(()=>{
        res.redirect('/');
    });
};

exports.update = async (req, res, next) => {
    const {email, nick, password} = req.body;
    const userId = req.user.id;

    try{
        const user = await User.findOne({ where: {id: userId}});

        if(!user){
            return res.redirect('/profile?error=notfound');
        }

        //수정
        user.email = email;
        user.nick = nick;

        if(password) {
            const hash = await bcrypt.hash(password, 12);
            user.password = hash;
        }

        await user.save(); //수정된 정보 저장

        return res.redirect('/');
    }catch (err){
        console.error(err);
        next(err);
    }
};
