import React, { useState, useEffect } from 'react';

const PatientAssignment = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch patients and doctors from the API
    fetchPatients();
    fetchDoctors();
  }, []);

  const fetchPatients = async () => {
    try {
      // Make API call to fetch patients
      const response = await fetch('/api/admin/patients');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const fetchDoctors = async () => {
    try {
      // Make API call to fetch doctors
      const response = await fetch('/api/admin/doctors');
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleAssignDoctor = (patientId, doctorId) => {
    // Call the assign doctor API with patientId and doctorId
    console.log(patientId, doctorId);
  };

  return (
    <div>
      <h2>Patient Assignment</h2>
      <div>
        <h3>Patients</h3>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              <span>{patient.name}</span>
              <select onChange={(e) => handleAssignDoctor(patient.id, e.target.value)}>
                <option value="">Assign Doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientAssignment;