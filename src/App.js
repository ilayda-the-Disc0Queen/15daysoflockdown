import React from 'react';
import ReactDOM from "react-dom";
import Navbar from './Navbar';
import Content from './Content';
import ModalImage from './Popup';
import 'semantic-ui-css/semantic.min.css'

const App =({children}) => {
  return(
    <div className="container">
      <Navbar/>
      <ModalImage/>
      <Content/>
    </div>
  );
};

export default App
