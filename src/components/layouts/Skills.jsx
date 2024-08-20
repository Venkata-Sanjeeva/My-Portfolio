import React from 'react';
import SkillsCard from "./SkillsCard.jsx";

export default function Skills(props) {
  return (
    <section className='skills' id='Skills'>
      {props.skillsData.map((ele, index) => (
        <SkillsCard 
            skill={ele}
            key={index}
        />
      ))}
    </section>
  )
}
