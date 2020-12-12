import React from 'react';
import './stylesheets/Content.css'
import image from './images/image.png';
import gif from './images/fast-aligned-WIP.gif';

const Content = () => {
  return (
    <div>
      <div className="ui grid pictures">
        <div className="nine wide column"></div>
        <div className="four wide column">
          <img className="ui fluid image" src={image} alt="image1"/>
        </div>
        <div className="one wide column">
          <img id="image2" src={image} alt="image2"/>
        </div>
        <div className="three wide column">
          <img id="image3" className="ui fluid image" src={image} alt="image3"/>
        </div>
        <div className="sixteen wide column">
          <img id="gif" src={gif} alt="gif of moving light"/>
        </div>
        <div className="eight wide column"></div>
        <div className="three wide column">
          <img id="image4" src={image} alt="image4"/>
        </div>
        <div className="two wide column">
          <img id="image5" src={image} alt="image5"/>
        </div>
      </div>
    </div>
  );
};

export default Content
