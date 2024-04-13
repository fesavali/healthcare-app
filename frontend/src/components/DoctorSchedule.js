import React, { useState, useEffect } from 'react';

const DoctorSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch doctor schedule from the API
    fetchDoctorSchedule();
  }, []);

  const fetchDoctorSchedule = async () => {
    try {
      // Make API call to fetch doctor schedule
      const response = await fetch('/api/doctor/schedule');
      const data = await response.json();
      setSchedule(data);
    } catch (error) {
      console.error('Error fetching doctor schedule:', error);
    }
  };

  const handleUpdateSchedule = (e) => {
    e.preventDefault();
    // Call the update schedule API with schedule data
    console.log(schedule);
  };

  return (
    <div>
      <h2>Doctor Schedule</h2>
      <form onSubmit={handleUpdateSchedule}>
        {/* Render schedule UI */}
        <ul>
          {schedule.map((slot) => (
            <li key={slot.id}>
              <input
                type="checkbox"
                checked={slot.available}
                onChange={() =>
                  setSchedule((prevSchedule) =>
                    prevSchedule.map((s) =>
                      s.id === slot.id ? { ...s, available: !s.available } : s
                    )
                  )
                }
              />
              <span>{slot.day}: {slot.time}</span>
            </li>
          ))}
        </ul>
        <button type="submit">Update Schedule</button>
      </form>
    </div>
  );
};

export default DoctorSchedule;