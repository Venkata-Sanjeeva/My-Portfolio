import React from 'react';

export default function SkillsCard(props) {
  const imageLocation = require(`../images/SkillsImages/${props.skill.location}`);
  const styleObj = {
    "width": `${(props.skill.rating) * 10}%`,
    "height": "20px",
    "display": "block",
    "backgroundColor": "#edaf11",
    "borderRadius": "15px"
  }
  return (
    <div className='skill-div'>
      <div className="left-section">
        <img src={imageLocation} alt="React Logo" />
        <p>{props.skill.name}</p>
      </div>
      <div className="middle-section">
        <span id={`${props.skill.rating}`} style={styleObj}></span>
      </div>
      <div className="right-section">
        <span className="rating-number">{`${props.skill.rating}`} / 10</span>
      </div>
    </div>
  )
}
