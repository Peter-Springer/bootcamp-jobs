import React, { Component } from 'react';
import firebase from '../firebase';
import userContainer from '../containers/userContainer';
import Form from './Form';
import Map from './Map';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar
        />
        <Map/>
      </div>
    )
  };
};

export default userContainer(App);
