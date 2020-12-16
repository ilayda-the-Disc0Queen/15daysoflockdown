import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/style.css';

const App =() => {
  return(
    <div className="container">
      <Navbar/>
      <Content/>
    </div>
  );
};

export default App
