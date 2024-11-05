const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/', authenticate, prescriptionController.getPrescriptions);
router.post('/', authenticate, prescriptionController.createPrescription);

module.exports = router;
