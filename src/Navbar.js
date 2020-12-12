import React from 'react';
import './stylesheets/Navbar.css';
import aboutBtn from './images/about-button.png';
import title from './images/website-title-white.png';

const Navbar = () => {
  return (
    <div id="top" className="ui grid navbar stackable">
      <div className="four wide left floated column">
        <a className="item title" href="">
          <img id="title" src={title} alt="Fifteen days of lockdown"/>
        </a>
      </div>
      <div className="two wide right floated column">
        <a className="item" href="">
          <img id="about" src={aboutBtn} alt="About button"/>
        </a>
        <div className="one wide right floated column"></div>
      </div>
        <div id="description" class="fourteen wide column">A digital exhibition by Charlotte Holme</div>
        <div class="one wide column">
          <a id="contact" className="item" href="">contact</a>
        </div>
    </div>
  );
};

export default Navbar

