import React from 'react';
import { Image, Modal, Icon } from 'semantic-ui-react';
import './stylesheets/AboutPopup.css'
import aboutBtn from './images/about-button.png';
import image from './images/pop-up-description.png';


function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const AboutPopup = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  const AboutButton = () => {
    return (
      <img id="about" src={aboutBtn} alt="About button" onClick={() => dispatch({ type: 'open', size: 'fullscreen' })}/>
    );
  };

 return (
    <>
      <AboutButton/>
      <Modal
        size={size}
        open={open}
        onClick={() => dispatch({ type: 'close' })}
      >
      <Modal.Actions id="actions">
      <Icon
        bordered inverted color='black'
        name='close'
        onClick={() => dispatch({ type: 'close' })}/>
      </Modal.Actions>
      <Modal.Content id="content" image>
        <Image src={image} wrapped/>
      </Modal.Content>
      </Modal>
    </>
  );
};

export default AboutPopup
