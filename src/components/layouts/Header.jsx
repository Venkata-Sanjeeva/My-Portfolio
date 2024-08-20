// import React, { useEffect, useState } from 'react'
import "../../styles.css";

export default function Header() {

  function addClassName() {
    const hamburger = document.querySelector(".hamburger");

    const menuItems = document.querySelector(".menu-items");

    hamburger.classList.toggle("cross");
    menuItems.classList.toggle("show");
  }

  return (
    <nav className='navBar'>
      <div className="left-section">
        <h1 className="heading">🖐 Hi! I'm Venkata Sanjeeva Kuntumalla</h1>
      </div>

      <div className="right-section">
        <div className="hamburger" id="menu" onClick={addClassName}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className="menu-items">
        <li><a href="#Home">Home <span></span></a></li>
        <li><a href="#About">About <span></span></a></li>
        <li><a href="#Projects">Projects <span></span></a></li>
        <li><a href="#Skills">Skills <span></span></a></li>
        <li><a href="#ContactMe">Contact Me <span></span></a></li>
      </ul>
      </div>
    </nav>
  )
}
