import React from 'react';
import { Button, Image, Modal, Icon } from 'semantic-ui-react';
import './stylesheets/ContactPopup.css';
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

const ContactPopup = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined
  })
  const { open, size } = state

  const ContactButton = () => {
    return(
      <Button secondary id="close-modal" className="ui secondary button" onClick={() => dispatch({ type: 'open', size: 'fullscreen' })}>
        Contact
      </Button>
    );
  };

 return (
    <>
      <ContactButton />
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

export default ContactPopup
