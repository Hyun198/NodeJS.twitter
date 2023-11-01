const { Post } = require('../schemas/post');

exports.afterUploadImage = (req, res) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}` });
};

exports.createPost = async (req, res, next) => {
    try {
        const imgurl = `/img/${req.file.filename}`
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            img: imgurl,
            user: req.user._id,
        });
        await newPost.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
