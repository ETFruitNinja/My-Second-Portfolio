import React from 'react';
import Project from '../Project';

const projects = [
  {
    name: 'HTML/CSS Portfolio',
    image: `https://github.com/ETFruitNinja/my-first-portfolio/raw/main/assets/images/16-02-2023-screenshot.PNG`,
    link: 'https://etfruitninja.github.io/my-first-portfolio/',
  },
  {
    name: 'Timed Urology Quiz',
    image: 'https://github.com/ETFruitNinja/timed-urology-quiz/raw/main/assets/images/screenshot.PNG',
    link: 'https://etfruitninja.github.io/timed-urology-quiz/',
  },
  {
    name: 'Housing Search Tool',
    image: 'https://github.com/JpBaer/Housing-Market-Project/raw/main/assets/images/Block-Party-1.png',
    link: 'https://jpbaer.github.io/Housing-Market-Project/',
  },
  {
    name: 'Weather Dashboard',
    image: 'https://github.com/ETFruitNinja/weather-dashboard/raw/main/assets/images/screenshot.PNG',
    link: 'https://etfruitninja.github.io/weather-dashboard/',
  },
  {
    name: 'Text Editor',
    image: 'https://github.com/ETFruitNinja/Text-Editor/raw/main/screenshot.PNG',
    link: 'https://jy-text-editor.herokuapp.com/',
  },
  {
    name: 'Group Calendar',
    image: 'https://github.com/Karlfranzia/group-calendar/raw/main/assets/images/events.png',
    link: 'https://group-calendar.herokuapp.com/login',
  }
]

export default function Portfolio() {
  return (
    <div class="content">
      <h1>Portfolio</h1>
      {projects.map(project => <Project name={project.name} image={project.image} link={project.link}/>)}

    </div>
  );
}