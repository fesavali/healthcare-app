import React, { useState, useEffect } from 'react';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointment history from the API
    fetchAppointmentHistory();
  }, []);

  const fetchAppointmentHistory = async () => {
    try {
      // Make API call to fetch appointment history
      const response = await fetch('/api/appointments/history');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointment history:', error);
    }
  };

  return (
    <div>
      <h2>Appointment History</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <h3>{appointment.doctorName}</h3>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            {/* Add more appointment details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;