const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');


module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local();
    kakao();
};