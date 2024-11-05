import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PrescriptionList({ patientId }) {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        axios.get(`/api/prescriptions?patientId=${patientId}`)
            .then(response => setPrescriptions(response.data))
            .catch(error => console.error('Error fetching prescriptions:', error));
    }, [patientId]);

    return (
        <div>
            <h2>Prescriptions</h2>
            <ul>
                {prescriptions.map(prescription => (
                    <li key={prescription._id}>
                        {prescription.medicineName} - {prescription.dosage}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PrescriptionList;
