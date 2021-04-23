import React from 'react';
import Navbar from './Navbar.jsx';
import ThreeDObject from './3dObject.jsx';
import Projects from './Project.jsx';

class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {}
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