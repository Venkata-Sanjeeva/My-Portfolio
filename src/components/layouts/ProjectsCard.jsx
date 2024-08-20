import React from 'react';
import "../../styles.css";

export default function ProjectsCard(props) {
  const imagePath = require(`../images/ProjectsImages/${props.imageName}`);
  // console.log(imagePath);
  return (
    <div className="projects-card">
      <img className="projects-card-img" src={imagePath} alt="ProjectInterface" />
      <div className="projects-card-body">
        <div className="projects-card-title">{props.name}</div>
        <div className="projects-card-description">
          <p>{props.details}</p>
        </div>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="projects-visit-btn">Visit Website</a>
      </div>
    </div>
  )
}
