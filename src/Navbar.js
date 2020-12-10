import React from 'react';
import './stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <div className="ui grid navbar">
      <div class="sixteen wide column"></div>
        <div class="fifteen wide column">
          <a className="item" href="">Fifteen days of Lockdown</a>
        </div>
        <div class="one wide column">
          <a id="about" className="item" href="">About</a>
        </div>
        <div class="fifteen wide column"></div>
        <div class="one wide column">
          <a id="contact" className="item" href="">contact</a>
        </div>
    </div>
  );
};

export default Navbar

