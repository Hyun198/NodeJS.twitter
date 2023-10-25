const express= require('express');
const passport = require('passport');

const {join, login, logout} = require('../controllers/auth');
const {isLoggedIn , isNotLoggedIn } = require('../middlewares');


const router= express.Router();

router.post('/join',join,isNotLoggedIn);

router.post('/login',login,isNotLoggedIn);

router.get('/logout',logout,isLoggedIn);

module.exports = router;