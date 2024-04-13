import React, { useState, useEffect } from 'react';

const DoctorProfile = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    specialization: '',
    bio: '',
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch doctor data from the API
    fetchDoctorData();
  }, []);

  const fetchDoctorData = async () => {
    try {
      // Make API call to fetch doctor data
      const response = await fetch('/api/doctor/profile');
      const data = await response.json();
      setDoctorData(data);
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  const handleInputChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the update API with doctorData
    console.log(doctorData);
  };

  return (
    <div>
      <h2>Doctor Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields with doctorData */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={doctorData.name}
          onChange={handleInputChange}
        />
        {/* Add more form fields */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default DoctorProfile;