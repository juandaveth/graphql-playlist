const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model('Mentor', mentorSchema);