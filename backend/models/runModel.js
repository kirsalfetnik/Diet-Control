const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const runSchema = new Schema({
    dayName: {
        type: String,
        required: true
    },
    dayDate: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    runTime: {
        type: String,
        required: true
    },
    runDist: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Run', runSchema);