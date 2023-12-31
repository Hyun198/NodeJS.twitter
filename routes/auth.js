const express= require('express');
const passport = require('passport');

const {join, login, logout,kakaologout,update_profile} = require('../controllers/auth');
const {isLoggedIn , isNotLoggedIn } = require('../middlewares');


const router= express.Router();

router.post('/join',join,isNotLoggedIn);

router.post('/login',login,isNotLoggedIn);

router.get('/logout',logout,isLoggedIn);

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao',{
    failureRedirect: '/?error=카카오로그인 실패',
}), (req,res)=> {
    res.redirect('/');
});

router.post('/update', update_profile ,isLoggedIn)

module.exports = router;