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
            <img className="ui fluid image" src={gif} alt="image1"/>
          </div>
          <div className="twelve wide column"></div>
          <div className="three wide column">
            <img id="image2" className="ui fluid image" src={image} alt="image2"/>
          </div>
          <div className="sixteen wide column">
            <img id="gif" src={image} alt="image3"/>
          </div>
        </div>
      </div>
  );
};

export default Content
