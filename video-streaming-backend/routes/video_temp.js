const express = require('express');
const multer = require('multer');
const videoController = require('../controllers/videoController');
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authMiddleware, authController.verifyAdmin, upload.single('video'), videoController.uploadVideo);
router.get('/stream/:id', videoController.streamVideo);
router.get('/', videoController.getAllVideos);
router.get('/trending', videoController.getTrendingVideos);
router.get('/category/:category', videoController.getVideosByCategory);
router.get('/:id', videoController.getVideoById);
router.put('/:id', authMiddleware, authController.verifyAdmin, videoController.updateVideo);
router.delete('/:id', authMiddleware, authController.verifyAdmin, videoController.deleteVideo);

module.exports = router;
