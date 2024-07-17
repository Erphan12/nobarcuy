const videoModel = require('../models/videoModel');
const path = require('path');

exports.uploadVideo = async (req, res) => {
  const { title, description, category } = req.body;
  const file_path = req.file.path;
  
  try {
    const videoId = await videoModel.uploadVideo(title, description, category, file_path);
    res.status(201).json({ id: videoId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateVideo = async (req, res) => {
  const { id } = req.params;
  const { title, description, category } = req.body;

  try {
    await videoModel.updateVideo(id, title, description, category);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteVideo = async (req, res) => {
  const { id } = req.params;

  try {
    await videoModel.deleteVideo(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await videoModel.getAllVideos();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVideoById = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await videoModel.getVideoById(id);
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTrendingVideos = async (req, res) => {
  try {
    const videos = await videoModel.getTrendingVideos();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVideosByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const videos = await videoModel.getVideosByCategory(category);
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.streamVideo = async (req, res) => {
  const { id } = req.params;
  
  try {
    const video = await videoModel.getVideoById(id);
    if (!video) return res.status(404).json({ error: 'Video not found' });

    const videoPath = path.resolve(video.file_path);
    res.sendFile(videoPath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
