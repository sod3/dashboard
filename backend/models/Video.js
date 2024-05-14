// models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add more fields as needed...
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
