const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },

    nick: {
        type: Sequelize.STRING(15),
        allowNull: false,

    },

    password: {
        type: Sequelize.STRING(100),
        allowNull: true,

    },

    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

    provider: {
        type: Sequelize.ENUM('local', 'kakao'),
        allowNull: false,
        defaultValue: 'local',
    },
    snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
    }
});

// 연관 관계 설정
User.hasMany(Post, {
    foreignKey: 'UserId', // 게시글 모델에서 User 모델과의 연관을 나타내는 외래 키
    as: 'posts', // 연관된 게시글을 가져올 때 사용할 이름
});

module.exports = User;