import React, { useState, useEffect } from 'react';

const PatientProfile = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    contactNumber: '',
    bloodGroup: '',
    allergies: '',
    medications: '',
    medicalHistory: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phoneNumber: '',
    },
  });

   useEffect(() => {
    // Fetch patient data from the API
    fetchPatientData();
  }, []);

  const fetchPatientData = async () => {
    try {
      // Make API call to fetch patient data
      const response = await fetch('/api/patient/profile');
      const data = await response.json();
      setPatientData(data);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const handleInputChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to update patient data
      const response = await fetch('/api/patient/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });
      if (response.ok) {
        console.log('Patient profile updated successfully');
      } else {
        console.error('Failed to update patient profile');
      }
    } catch (error) {
      console.error('Error updating patient profile:', error);
    }
  };

  return (
    <div>
      <h2>Patient Profile</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <div className="form-column">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={patientData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={patientData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default PatientProfile;