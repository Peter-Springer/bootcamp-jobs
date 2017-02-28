import React, { Component } from 'react';
import Map from './Map';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Map/>
      </div>
    )
  };
};

export default App;
