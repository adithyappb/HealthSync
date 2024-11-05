const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/start/:appointmentId', authenticate, videoController.startVideoCall);
router.post('/end/:appointmentId', authenticate, videoController.endVideoCall);

module.exports = router;
