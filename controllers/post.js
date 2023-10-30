const { Post } = require('../models/post');

exports.afterUploadImage =(req,res)=>{
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}`});
};

exports.uploadPost = async (req,res,next)=>{
    try{
        const post = await Post.create({
            content: req.body.content,
            img: req.body.url,
            UserId: req.user.id,
        });
        console.log(post);
        res.redirect('/');
    }catch (err){
        console.error(err);
        next(err);
    }
};  