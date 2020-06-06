'user strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Blog = new Schema({
    title: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
        required: false,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }    
});


Blog.index({ title: 'text' });

module.exports = mongoose.model('Blog', Blog);