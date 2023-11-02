const Post = require('../schemas/post');



exports.create = async (req, res, next) => {
    console.log(Post);
    const { title, content } = req.body;
    console.log(title, content);
    try {
        const newPost = new Post({
            title,
            content,
            user: req.user._id,
        });
        await newPost.save();
        res.send('완료');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
