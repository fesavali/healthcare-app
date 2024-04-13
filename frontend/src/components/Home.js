// src/components/Home.js
import React from 'react';
import Intro from "./Intro";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection";


function Home() {
  return (
    <div>
      <h1 className="text-center mb-4">Welcome to My Healthcare App</h1>
      <p className="text-center mb-4">Explore our features and choose your role:</p>
      <Intro></Intro>
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
    </div>
  );
}

export default Home;
