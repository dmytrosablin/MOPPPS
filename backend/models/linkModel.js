const mongoose = require('mongoose');
const Schema = mongoose.Schema

const linkModel = new Schema({
    link: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Link', linkModel)