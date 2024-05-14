// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// Define routes
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes as needed...

module.exports = router;
