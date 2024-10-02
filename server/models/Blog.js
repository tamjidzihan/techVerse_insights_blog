const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false },
    content: [{
        headline: { type: String, required: true },
        image: { type: String, required: false },
        paragraph: { type: String, required: true }
    }], // Array of headline and paragraph
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    datePosted: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
