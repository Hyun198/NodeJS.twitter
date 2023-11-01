const Post = require('../schemas/post');

exports.createPost = async (req, res, next) => {
    const { title, content } = req.body;
    const user = req.user;

    try {
        const newPost = new Post({
            title,
            content,
            user: user._id,
        });
        await newPost.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
