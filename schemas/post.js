const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);