const Post = require('../schemas/post');

exports.renderProfile = (req, res) => {
    res.render('profile', { title: '내 정보' });
};

exports.renderLogin = (req, res) => {
    res.render('login', { title: '로그인' });
}

exports.renderMain = async (req, res, next) => {
    try {
        const posts = await Post.find()
            .populate('user', 'nick')
            .sort({ createdAt: 'desc' })
            .exec();
        console.log(posts);
        res.render('main', { title: 'Node twitter', posts });
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.renderJoin = (req, res) => {
    res.render('join', { title: '회원 가입' });
};


exports.renderUpdate_profile = (req, res) => {
    res.render('updateProfile', { title: '내 정보 수정' });
};

exports.renderCreate_post = (req, res) => {
    res.render('uploadPost', { title: '게시글 작성' });
}