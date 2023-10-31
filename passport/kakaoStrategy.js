const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
const bcrypt = require('bcrypt');


module.exports = () => {
    passport.use(new kakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',

    }, async (accessToken, refreshToken, profile, done) => {
        try {
            if (profile._json?.kakao_account?.email) {
                const exUser = await User.findOne({
                    snsId: profile.id, provider: 'kakao',
                });
                if (exUser) {
                    done(null, exUser);
                } else {
                    const newUser = await User.create({
                        email: profile._json.kakao_account.email,
                        nick: profile.displayName,
                        snsId: profile.id,
                        provider: 'kakao',
                    });
                    done(null, newUser);
                }
            } else {
                done(null, false, { message: 'Kakao에서 이메일 정보를 제공하지 않습니다.' });
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};
