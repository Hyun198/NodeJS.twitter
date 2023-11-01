const { Post } = require('../schemas/post');
const fs = require('fs');

exports.createPost = async (req, res, next) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            user: req.user._id,
        });


        if (req.file) {
            newPost.img.data = fs.readFileSync(req.file.path);
            newPost.img.contentType = req.file.mimetype;
        }

        await newPost.save();

        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
