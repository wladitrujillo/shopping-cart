'user strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Company = new Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    address: {
        type: String,
        required: false,
        trim: true
    },
    country: {
        type: String,
        required: false,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        trim: true
    },
    fax: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: false,
        trim: true
    },
    logo: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    networks: [
        {
            icon: {
                type: String,
                required: false,
                trim: true
            },
            href: {
                type: String,
                required: false,
                trim: true
            }

        }
    ]
});


Company.index({ name: 'text' });

module.exports = mongoose.model('Company', Company);