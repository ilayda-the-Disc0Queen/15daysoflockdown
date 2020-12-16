import React from 'react';
import './stylesheets/Navbar.css';
import title from './images/website-title-white.png';
import description from './images/description.png';
import AboutPopup from './AboutPopup';
import ContactPopup from './ContactPopup';

const Navbar = () => {
  return (
    <div className="container">
      <div id="top" className="ui grid navbar stackable">
        <div className="four wide left floated column">
          <img id="title" className="item title" src={title} alt="Fifteen days of lockdown"/>
        </div>
        <div className="two wide right floated column">
          <div className="one wide right floated column"><AboutPopup/></div>
        </div>
        <div className="fourteen wide column">
          <img id="description" className="item title" src={description} alt="A digital exhibition by Charlotte Holme"/>
        </div>
        <div id="contact" className="one wide right floated column"><ContactPopup/></div>
      </div>
    </div>
  );
};

export default Navbar

