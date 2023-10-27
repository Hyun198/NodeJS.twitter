const { User, Post} = require('../models');

exports.renderProfile=(req, res)=> {
    res.render('profile',{title: '내 정보'});
};

exports.renderLogin = (req, res)=>{
    res.render('login', {title: '로그인'});
}
exports.renderMain= async (req, res, next) => {
    try{
        const posts = await Post.findAll({
            include:{
                model: User,
                attributes: ['id', 'nick'],
            },
            order: [['createdAt', 'DESC']]
        });
        res.render('main', {title:'Node twitter'});
    }catch (err){
        console.error(err);
        next(err);
    }
};

exports.renderJoin=(req, res)=>{
    res.render('join', {title: '회원 가입'});
};



