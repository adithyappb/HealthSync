import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientProfile({ patientId }) {
    const [patient, setPatient] = useState({});

    useEffect(() => {
        axios.get(`/api/patients/${patientId}`)
            .then(response => setPatient(response.data))
            .catch(error => console.error('Error fetching patient data:', error));
    }, [patientId]);

    return (
        <div>
            <h2>Patient Profile</h2>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Medical History: {patient.medicalHistory}</p>
        </div>
    );
}

export default PatientProfile;
