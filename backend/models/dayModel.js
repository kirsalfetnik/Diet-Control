const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const daySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Day', daySchema);