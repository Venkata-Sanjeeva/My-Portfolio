import React from 'react'
import Profile from "../images/My-Profile.jpg";

export default function About() {
  return (
    <section className='home' id='Home'>
      <div className="left-section">
        <p className="home-description">I'm a Front - End Developer, With a background in Problem Solving and a passion in Solving more Logical Questions in Real World, I'm excited to explore new opportunities and make a lasting impact on the developing roles.</p>
      </div>

      <div className="right-section">
        <figure className='home-figure'>
          <img src={Profile} alt="Profile" />
          <figcaption>Front - End Developer</figcaption>
        </figure>
      </div>

    </section>
  )
}
