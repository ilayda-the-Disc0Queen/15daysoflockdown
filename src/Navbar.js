import React from 'react';
import './stylesheets/Navbar.css';
import aboutBtn from './images/about-button.png';

const Navbar = () => {
  return (
    <div className="ui grid navbar">
      <div class="sixteen wide column"></div>
        <div class="thirteen wide column">
          <a className="item" href="">Fifteen days of Lockdown</a>
        </div>
        <div class="two wide column">
          <a className="item" href="">
            <img id="about" src={aboutBtn} alt="About button"/>
          </a>
        </div>
        <div class="fifteen wide column"></div>
        <div class="one wide column">
          <a id="contact" className="item" href="">contact</a>
        </div>
    </div>
  );
};

export default Navbar

