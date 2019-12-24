const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    name: String,
    podcast: String,
    mentorId: String,
});

module.exports = mongoose.model('Episode', episodeSchema);