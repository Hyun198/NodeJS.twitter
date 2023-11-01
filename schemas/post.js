const mongoose = require('mongoose');
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    imgUrl: {
        type: String,
    },
}, { timestamps: true });


module.exports = mongoose.model('Post', postSchema);