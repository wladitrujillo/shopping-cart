'user strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Product = new Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    isNewProduct: {
        type: Boolean,
        required: true,
        default: false
    },
    isSale: {
        type: Boolean,
        required: true,
        default: false
    }
});


Product.index({ name: 'text' });

module.exports = mongoose.model('Product', Product);