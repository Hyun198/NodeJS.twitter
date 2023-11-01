const { Post } = require('../schemas');

exports.uploadImage = async (req, res, next) => {
    try {
        const imgUrl = req.file.filename;
        req.imgUrl = imgUrl;
        next();
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.createPost = async (req, res, next) => {
    const { title, content } = req.body;
    const user = req.user;
    const imgUrl = req.file.filename;

    try {
        const newPost = new Post({
            title,
            content,
            user: user._id,
            imgUrl,
        });
        await newPost.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
