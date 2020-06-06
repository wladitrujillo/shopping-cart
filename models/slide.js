'user strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Slide = new Schema({
    title: {
        type: String,
        required: false,
        trim: true
    },
    subtitle: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    slideImg: {
        type: String,
        required: true,
        trim: true
    },
    promoImg: {
        type: String,
        required: false,
        trim: true
    }
});


Slide.index({ title: 'text' });

module.exports = mongoose.model('Slide', Slide);