const { Post } = require('../schemas/post');
const fs = require('fs');

exports.afterUploadImage = (req, res) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}` });
};

exports.createPost = async (req, res, next) => {
    try {
        const imgPath = req.file.path;
        const imgFileName = req.file.filename;
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            img: {
                data: fs.readFileSync(imgPath),
                contentType: 'image/jpeg',
            },
            user: req.user._id,
        });
        await newPost.save();
        fs.unlinkSync(imgPath);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
