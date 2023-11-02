const express = require('express');
const fs = require('fs');

const { isLoggedIn } = require('../middlewares/index');

const { create } = require('../controllers/post');

const router = express.Router();

try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads폴더가 없어 생성했습니다.');
    fs.mkdirSync('uploads');
}


router.get('/create-post', isLoggedIn);


router.post('/create-post', isLoggedIn, create);


module.exports = router;


