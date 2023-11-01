const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { isLoggedIn } = require('../middlewares');
const { createPost } = require('../controllers/post');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

router.get('/create-post', isLoggedIn);

router.post('/create-post', isLoggedIn, upload.single('image'), createPost);



module.exports = router;


