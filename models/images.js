'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const imagesSchema = Schema({
    file: String,
    user: {type: Schema.ObjectId, ref: "Users"}
});

module.exports = mongoose.model('Images', imagesSchema);