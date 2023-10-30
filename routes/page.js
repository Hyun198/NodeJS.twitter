const express = require('express');
const { renderProfile, renderJoin, renderMain, renderLogin,renderUpdate_profile,renderCreate_post} = require('../controllers/page');
const {isLoggedIn , isNotLoggedIn } = require('../middlewares');


const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user= req.user;
    next();
});

router.get('/profile', renderProfile,isLoggedIn);

router.get('/join', renderJoin,isNotLoggedIn);

router.get('/login', renderLogin);

router.get('/',renderMain);

router.get('/update', renderUpdate_profile, isLoggedIn);

router.get('/post', renderCreate_post, isLoggedIn);



module.exports = router;