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


const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/');
        }, filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});



router.post('/create', isLoggedIn, createPost);

module.exports = router;


