const express = require('express');
const { renderProfile, renderJoin, renderMain, renderLogin} = require('../controllers/page');

const router = express.Router();


router.get('/profile', renderProfile);

router.get('/join', renderJoin);

router.get('/login', renderLogin);

router.get('/',renderMain);


module.exports = router;