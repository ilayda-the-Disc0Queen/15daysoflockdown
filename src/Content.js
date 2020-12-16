import React from 'react';
import './stylesheets/Content.css'
import image_1 from './images/image_1.png';
import image_2 from './images/image_2.png';
import image_3 from './images/image_3.png';
import image_4 from './images/image_4.3f6fc74b.png';
import image_5 from './images/image_5.png';
import image_6 from './images/image_6.png';
import image_7 from './images/image_7.png';
import image_8 from './images/image_8.png';
import gif from './images/fast-aligned-WIP.gif';
import mp3 from './audio/shedonttext.mp3';

const Content = () => {
  return (
      <div className="container">
        <img id="image1" src={image_1} alt="image1"/>
        <img id="image2" src={image_2} alt="image2"/>
        <img id="image3" src={image_3} alt="image3"/>
        <div className="gifImage">
          <img id="gif" src={gif} alt="gif of moving light"/>
          <audio controls loop id="audio">
            <source src={mp3} type="audio/mpeg"/>
            Your browser does not support the audio element.
          </audio>
        </div>
        <img id="image4" src={image_4} alt="image4"/>
        <img id="image5" src={image_5} alt="image5"/>
        <img id="image6" src={image_6} alt="image6"/>
        <img id="image7" src={image_7} alt="image7"/>
        <img id="image8" src={image_8} alt="image8"/>
      </div>
  );
};

export default Content
