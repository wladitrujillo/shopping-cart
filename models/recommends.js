'user strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let SlideRecommends = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});


SlideRecommends.index({ title: 'text' });

module.exports = mongoose.model('SlideRecommends', SlideRecommends);