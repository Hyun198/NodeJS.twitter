const express = require('express');
const { renderProfile, renderJoin, renderMain, renderLogin} = require('../controllers/page');
const {isLoggedIn , isNotLoggedIn } = require('../middlewares');

const router = express.Router();


router.get('/profile', renderProfile,isLoggedIn);

router.get('/join', renderJoin,isNotLoggedIn);

router.get('/login', renderLogin);

router.get('/',renderMain);


module.exports = router;