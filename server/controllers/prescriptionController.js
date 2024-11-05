const Prescription = require('../models/Prescription');

exports.getPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find({ patientId: req.query.patientId });
        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching prescriptions' });
    }
};

exports.createPrescription = async (req, res) => {
    try {
        const prescription = new Prescription(req.body);
        await prescription.save();
        res.status(201).json(prescription);
    } catch (error) {
        res.status(500).json({ message: 'Error creating prescription' });
    }
};
