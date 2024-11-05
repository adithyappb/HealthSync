const Patient = require('../models/Patient');

exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patient data' });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(500).json({ message: 'Error updating patient data' });
    }
};
