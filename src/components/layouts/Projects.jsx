import React from 'react';
import ProjectsCard from './ProjectsCard';

export default function Projects(props) {
  return (
    <section className='projects' id='Projects'>
      {
        props.projectsData.map((obj, index) => (
          <ProjectsCard 
            key={index} 
            name={obj.title} 
            details={obj.description} 
            link={obj.link}
            imageName={obj.location}
            cardNumber={index} 
          />
        ))
      }
    </section>
  );
}
