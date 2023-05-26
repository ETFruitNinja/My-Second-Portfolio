// Use this component for each project in the portfolio section
import React from 'react';

export default function Project(props) {
    const cardStyle = {
      width: '18rem',
    }
  
    return (
      <div className="container" class="project-card">
        <div className="card bacon" style={cardStyle}>
          <a href={props.link}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
          />
          <div className="card-body" class="exit-link">
          <h5 className="card-title">{props.name}</h5>
          </div>
          </a>
        </div>
      </div>
    );
  }