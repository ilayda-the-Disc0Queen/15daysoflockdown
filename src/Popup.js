import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

function ModalImage() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Contact</Button>}
    >
      <Modal.Header>Header</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/wireframe/image-square.png' wrapped />
        <Modal.Description>
          <p>Description</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalImage


// <div className="ui inverted accordion">
//         <div className="active title">
//           Contact
//         </div>
//         <div className="active content">
//           <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
//         </div>
//         <div class="title">
//           <i class="dropdown icon"></i>
//           How do you acquire a dog?
//         </div>
//         <div class="content">
//           <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
//           <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
//         </div>
//       </div>
