import React from 'react';
import { Container } from 'react-bootstrap';
import PatientProfile from './PatientProfile';
import AppointmentBooking from './AppointmentForm';
import AppointmentHistory from './AppointmentHistory';
import './PatientDashboard.css'; // Import CSS file for custom styling

const PatientDashboard = () => {
  return (
    <Container className="patient-dashboard">
      <h1 className="text-center mb-4">Patient Dashboard</h1>
      <div className="dashboard-section">
        <PatientProfile />
      </div>
      <div className="dashboard-section mt-4">
        <AppointmentBooking/>
      </div>
      <div className="dashboard-section mt-4">
        <AppointmentHistory />
      </div>
    </Container>
  );
};

export default PatientDashboard;
