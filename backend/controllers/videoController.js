// controllers/videoController.js
const Video = require('../models/Video');

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new video
const createVideo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newVideo = new Video({ title, description });
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a video
const deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Video not found' });
  }
};

// Update a video
const updateVideo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    res.json(updatedVideo);
  } catch (error) {
    res.status(404).json({ message: 'Video not found' });
  }
};

module.exports = { getAllVideos, createVideo, deleteVideo, updateVideo };
