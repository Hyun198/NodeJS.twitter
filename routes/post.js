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
    console.error('uploads폴더가 없어 생성했습니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/');
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

router.get('/create-post', isLoggedIn);


router.post('/create-post', isLoggedIn, (req, res, next) => {
    upload.single('img')(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            next(err);
        } else {
            createPost(req, res, next);
        }
    });
});





module.exports = router;


