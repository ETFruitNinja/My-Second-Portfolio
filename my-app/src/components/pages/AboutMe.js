import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img id="about-photo" src={require ('../../assets/profile-photo.jpg')} alt="Taiwan photo" />
      <p>
        I am a medical scribe interested in applying coding to the field of medicine.
      </p>
    </div>
  );
}