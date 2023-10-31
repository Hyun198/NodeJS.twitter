const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user'); // User 모델을 불러옵니다.

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING(140),
        allowNull: true,
    },
    img: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
});

// 연관 관계 설정
Post.belongsTo(User, {
    foreignKey: 'UserId', // User 모델과의 연관 관계에서 사용할 외래 키
    as: 'user', // 연관된 사용자를 가져올 때 사용할 이름
});

module.exports = Post;