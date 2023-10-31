const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    img: [
        {
            data: Buffer,
            contentType: String,
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);