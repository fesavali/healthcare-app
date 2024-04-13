// src/components/About.js

import React from 'react';
import img3 from "../images/About/about3.jpeg";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
      <h1>About Us</h1>
       <div className="about-image">
        <img src={img3} alt="" width="80%" height="300px"/>
      </div>
        
        <p>
          Welcome to our healthcare platform! We are dedicated to providing high-quality medical services to our community.
          Our team of experienced doctors, nurses, and staff work tirelessly to ensure your well-being.
          Our platform is committed to delivering exceptional medical services to our community. Our team of highly skilled doctors, nurses, and staff members work tirelessly to safeguard your health and well-being.
          Whether it’s preventive care, diagnostics, or treatment, we’re here for you.
        </p>
        <h2>Our Mission</h2>
        <p>
          Promoting Health: We strive to empower individuals to lead healthier lives by emphasizing preventive measures, healthy lifestyle choices, and early intervention.
Preventing Illness: Our focus extends beyond treating diseases. We actively work to prevent illnesses through education, screenings, and personalized health plans.
Enhancing Quality of Life: Our mission is to enhance the overall quality of life for our patients. We believe that physical health, mental well-being, and social support are interconnected.
Compassionate Care: Compassion is at the core of our practice. We treat every patient with empathy, respect, and kindness.
Evidence-Based Medicine: Our medical decisions are grounded in scientific evidence and best practices.
Patient Education: We empower patients with knowledge, helping them make informed decisions about their health.
        </p>
        <h2>Services</h2>
        <ul>
          <li>Primary Care
          <p>Our primary care services cover routine check-ups, vaccinations, screenings, and management of chronic conditions. 
          Our primary care physicians are your first point of contact for all health-related concerns.</p>
          </li>
          <li>Specialty Clinics
          <p>
          Our specialty clinics offer specialized care for specific health conditions.
           Whether it’s cardiology, dermatology, or neurology, our experts provide targeted treatments.</p>
           </li>
          <li>Emergency Services
          <p>
           In emergencies, our dedicated team is available 24/7.
           From trauma care to critical interventions, we prioritize rapid response and effective treatment.</p>
           </li>
          <li>Telehealth Consultations
          <p>
          We understand the importance of convenience.
           Our telehealth services allow you to consult with our healthcare professionals remotely, ensuring timely advice and follow-ups.
           </p>
           </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
