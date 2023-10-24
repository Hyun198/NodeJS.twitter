const express= require('express');
const passport = require('passport');

const {join, login, logout} = require('../controllers/auth');

const router= express.Router();

router.post('/join',join);

router.post('/login',login);

router.get('/logout',logout);

module.exports = router;