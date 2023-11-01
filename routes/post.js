const express = require('express');
const fs = require('fs');
const multer = require('multer');
const { isLoggedIn } = require('../middlewares/index');
const upload = require('../middlewares/upload');
const { createPost } = require('../controllers/post');

const router = express.Router();

try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads폴더가 없어 생성했습니다.');
    fs.mkdirSync('uploads');
}


router.get('/create-post', isLoggedIn);


router.post('/create-post', isLoggedIn, upload.single('img'), createPost);


module.exports = router;


