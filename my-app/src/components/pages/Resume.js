import React from 'react';
import ResumeFile from '../../assets/resume.pdf';

export default function Resume() {
  return (
    <div class="content">
      <h1>Resume</h1>
      <a href={ResumeFile} download="resume.pdf">
        <p class="exit-link">Download File</p>
      </a>
      <h3 id="skills">Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
      </ul>
    </div>
  );
}