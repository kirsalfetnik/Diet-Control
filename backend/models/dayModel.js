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
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Day', daySchema);