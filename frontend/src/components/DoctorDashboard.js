// DoctorDashboard.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import DoctorProfile from './DoctorProfile';
import DoctorSchedule from './DoctorSchedule';
import PatientRecords from './PatientRecords';
import './PatientDashboard.css'; // Import shared CSS file

const DoctorDashboard = () => {
  return (
    <Container className="dashboard-container mt-5">
      <h1 className="text-center mb-4">Doctor Dashboard</h1>
          <div className="dashboard-section">
             <DoctorProfile />
          </div>
          <div className="dashboard-section">
             <DoctorSchedule />
          </div>
          <div className="dashboard-section">
             <PatientRecords />
          </div>
    </Container>
  );
};

export default DoctorDashboard;
