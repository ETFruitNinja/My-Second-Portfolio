import React from 'react';

export default function About() {
  return (
    <div class="content">
      <h1>About Me</h1>
      <img id="about-photo" src={require ('../../assets/profile-photo.jpg')} alt="Taiwan photo" />
      <p>
        My name is Jeffrey Yeh. I am a medical scribe interested in applying coding to the field of medicine.
      </p>
      <p>
        Some of my other hobbies include running, music, board games, and writing.
      </p>
    </div>
  );
}