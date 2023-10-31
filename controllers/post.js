const Post = require('../schemas/post');

exports.createPost = async (req, res, next) => {
    const { title, content, image } = req.body;
    try {
        const post = new Post({
            title,
            content,
            img: [{ data: image, contentType: 'image/png' }],
            user: req.user._id,
        });
        await post.save();

        return res.redirect('/');

    } catch (error) {
        console.error(error);
        next(error);
    }
};
