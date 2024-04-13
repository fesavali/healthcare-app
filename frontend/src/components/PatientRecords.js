import React, { useState, useEffect } from 'react';

const PatientRecords = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patient records from the API
    fetchPatientRecords();
  }, []);

  const fetchPatientRecords = async () => {
    try {
      // Make API call to fetch patient records
      const response = await fetch('/api/doctor/patients');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patient records:', error);
    }
  };

  const handleUpdateRecord = (patientId, updatedData) => {
    // Call the update patient record API with updatedData and patientId
    console.log(patientId, updatedData);
  };

  return (
    <div>
      <h2>Patient Records</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <h3>{patient.name}</h3>
            <p>Medical History: {patient.medicalHistory}</p>
            {/* Add more patient details */}
            <button onClick={() => handleUpdateRecord(patient.id, { /* updatedData */ })}>
              Update Record
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientRecords;