const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    medicineName: { type: String, required: true },
    dosage: { type: String, required: true },
    duration: { type: String, required: true },
    dateIssued: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
