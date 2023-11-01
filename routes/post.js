const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { isLoggedIn } = require('../middlewares');
const { createPost } = require('../controllers/post');
const router = express.Router();


try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads 폴더가 없어 폴더 생성');
    fs.mkdirSync('uploads');
}



router.get('/create-post', isLoggedIn);

router.post('/create-post', isLoggedIn, createPost);



module.exports = router;


