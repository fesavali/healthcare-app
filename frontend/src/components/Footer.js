// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Patients</h3>
          <ul>
            <li>Book Appointments</li>
            <li>View Medical Records</li>
            {/* Add more patient-related functions */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Doctors</h3>
          <ul>
            <li>Manage Appointments</li>
            <li>Access Patient Records</li>
            {/* Add more doctor-related functions */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Admin</h3>
          <ul>
            <li>Manage Users</li>
            <li>Generate Reports</li>
            {/* Add more admin-related functions */}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 Healthcare App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
