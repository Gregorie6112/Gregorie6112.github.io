import React from 'react';
import Navbar from './Navbar.jsx';
import ThreeDObject from './3dObject.jsx';
import Projects from './Project.jsx';
import AboutMe from './AboutMe.jsx';
import ContactMe from './ContactMe.jsx';
import renderItems from '../renderItems.js';
import {useEffect} from 'react';



const App = () => {
  useEffect(() => {
    renderItems();
  });
  return (
      <>
        <Navbar />
        <ThreeDObject />
        <Projects />
        <AboutMe />
        <ContactMe />
      </>
  )
};
export default App;