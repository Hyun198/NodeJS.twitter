const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    nick: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        enum: ['local', 'kakao'],
        required: true,
        default: 'local'
    },
    snsId: {
        type: String,
        required: true,
        default: 'local'
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);