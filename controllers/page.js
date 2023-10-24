exports.renderProfile=(req, res)=> {
    res.render('profile',{title: '내 정보'});
};


exports.renderMain=(req, res, next) => {
    res.render('main', {title:'Node twitter'});
};

exports.renderJoin=(req, res)=>{
    res.render('join', {title: '회원 가입'});
};

