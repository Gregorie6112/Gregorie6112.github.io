import React from 'react';
import Navbar from './Navbar.jsx';
import ThreeDObject from './3dObject.jsx';
import Projects from './Project.jsx';
import showScroll from './showScroll.jsx';

class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    let projects = document.getElementsByClassName('ProjectHolder');
    let title = document.getElementsByClassName('WorkCompleted');
    let arr2 = [...title];
    let arr = [...projects];
    showScroll(arr2);
    showScroll(arr);
  }
  render() {
    return (
      <>
        <Navbar />
        <ThreeDObject />
        <Projects />
      </>
    )
  }
};

export default App;