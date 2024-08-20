import React, { useState } from 'react';
import "../../styles.css";
import { aboutData } from '../data/AboutData';

export default function Cards() {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  function toggleCard(index) {
    if (openCardIndex === index) {
      setOpenCardIndex(null);
    } else {
      setOpenCardIndex(index);
    }
  }

  return (
    <>
      {aboutData.map((section, index) => (
        <div className='about-card' id={`card${index}`} key={index}>
          <div className={`about-card-title about-card-title-${index}`}>
            <p>{section.category}</p>
            <span
              className={`plus-symbol symbol-${index} ${openCardIndex === index ? "minus-symbol" : ""}`}
              onClick={() => toggleCard(index)} id='symbol'
            ></span>
          </div>
          <div className={`about-card-description about-card-desc-${index} ${openCardIndex === index ? "open" : ""}`} id='about-card-description-id'>
            {section.details && section.details.map((detail, idx) => (
              <p key={idx}>
                {detail.name && <strong>{detail.name}:- </strong>} <br />
                {detail.institution && <b>{detail.institution} </b>}
                {detail.duration && <i>{detail.duration}</i>}
              </p>
            ))}
            {!section.details && section.details.map((name, idx) => <p key={idx}>{name}</p>)}
          </div>  
        </div>
      ))}
    </>
  );
}
