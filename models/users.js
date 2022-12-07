'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("Users", usersSchema);