const { Post } = require('../models/post');

exports.afterUploadImage = (req, res) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}` });
};

exports.uploadPost = async (req, res, next) => {
    const { title, content, img } = req.body;
    const UserId = req.user.id; // 현재 로그인한 사용자의 ID

    try {
        const post = await Post.create({
            title,
            content,
            img,
            UserId,
        });
        res.status(201).json({ post });
    } catch (err) {
        console.error(err);
        next(err);
    }
};  
