const express= require('express');
const passport = require('passport');

const {join, login, logout} = require('../controllers/auth');
const {isLoggedIn , isNotLoggedIn } = require('../middlewares');
const { restart } = require('nodemon');


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

module.exports = router;