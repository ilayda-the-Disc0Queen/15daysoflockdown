import React from 'react';
import './stylesheets/Navbar.css';
import title from './images/website-title-white.png';
const Navbar = () => {
  return (
    <React.Fragment>
      <div id="top" className="ui grid navbar stackable">
        <div className="four wide left floated column">
          <img id="title" className="item title" src={title} alt="Fifteen days of lockdown"/>
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
