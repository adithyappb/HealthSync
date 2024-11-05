const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/:id', authenticate, patientController.getPatient);
router.put('/:id', authenticate, patientController.updatePatient);

module.exports = router;
