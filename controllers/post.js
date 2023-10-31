const { Post } = require('../schemas/post');

exports.createPost = async (req, res, next) => {
    const { title, content, imgUrl } = req.body;

    try {
        const post = await Post.create({
            title,
            content,
            img: imgUrl,
            UserId: req.user.id,
        });

        return res.redirect('/');

    } catch (error) {
        console.error(error);
        next(error);
    }
};
