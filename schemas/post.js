const mongoose = require('mongoose');
const User = require('./user');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // 'User' 모델과 연결
    },
    img: [
        {
            data: Buffer,
            contentType: String
        }
    ],

}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);