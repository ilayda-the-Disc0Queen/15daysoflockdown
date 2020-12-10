import React from 'react';
import './stylesheets/Content.css'
import image from './images/image.png';

const Content = () => {
  return (
      <div>
        <div className="ui grid pictures">
          <div className="ten wide column"></div>
          <div className="three wide column">
            <img src={image} alt="image1"/>
          </div>
          <div className="twelve wide column"></div>
          <div className="three wide column">
            <img src={image} alt="image2"/>
          </div>
          <div className="sixteen wide column">
            <img id="gif" src={image} alt="image3"/>
          </div>
        </div>
      </div>
  );
};

export default Content
