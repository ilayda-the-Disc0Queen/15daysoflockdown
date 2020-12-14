import React from 'react';
import './stylesheets/Navbar.css';
import aboutBtn from './images/about-button.png';
import title from './images/website-title-white.png';
import contactImage from './images/image.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <div id="top" className="ui grid navbar stackable">
        <div className="four wide left floated column">
          <a className="item title" href="">
            <img id="title" src={title} alt="Fifteen days of lockdown"/>
          </a>
        </div>
        <div className="two wide right floated column">
          <div className="one wide right floated column"></div>
        </div>
          <div id="description" className="fourteen wide column">A digital exhibition by Charlotte Holme</div>
      </div>
    </React.Fragment>
  );
};

export default Navbar

// <div id="contact" className="two wide column">Contact</div>
