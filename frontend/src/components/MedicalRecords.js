// src/components/MedicalRecords.js

import React from 'react';

function MedicalRecords() {
  // Logic to fetch and display medical records
  const medicalRecords = ['Record 1', 'Record 2', 'Record 3'];

  return (
    <div>
      <h2>Medical Records</h2>
      <ul>
        {medicalRecords.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
}

export default MedicalRecords;
