import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import ContactPopup from './ContactPopup';
import AboutPopup from './AboutPopup';
import 'semantic-ui-css/semantic.min.css'

const App =() => {
  return(
    <div className="container">
      <Navbar/>
      <ContactPopup/>
      <AboutPopup/>
      <Content/>
    </div>
  );
};

export default App
