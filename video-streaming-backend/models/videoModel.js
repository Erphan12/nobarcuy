const pool = require('../config/db');

exports.uploadVideo = async (title, description, category, file_path) => {
  const [result] = await pool.query('INSERT INTO videos (title, description, category, file_path) VALUES (?, ?, ?, ?)', [title, description, category, file_path]);
  return result.insertId;
};

exports.updateVideo = async (id, title, description, category) => {
  await pool.query('UPDATE videos SET title = ?, description = ?, category = ? WHERE id = ?', [title, description, category, id]);
};

exports.deleteVideo = async (id) => {
  await pool.query('DELETE FROM videos WHERE id = ?', [id]);
};

exports.getAllVideos = async () => {
  const [rows] = await pool.query('SELECT * FROM videos');
  return rows;
};

exports.getVideoById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM videos WHERE id = ?', [id]);
  return rows[0];
};

exports.getTrendingVideos = async () => {
  const [rows] = await pool.query('SELECT * FROM videos ORDER BY views DESC LIMIT 10');
  return rows;
};

exports.getVideosByCategory = async (category) => {
  const [rows] = await pool.query('SELECT * FROM videos WHERE category = ?', [category]);
  return rows;
};
