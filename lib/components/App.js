import React, { Component } from 'react';
import Map from './Map';
import NavBar from './NavBar';
import firebase, { reference } from '../firebase';
import userContainer from '../containers/userContainer';
import { map } from 'lodash';


class App extends Component {
  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    let convertedSnapshot = [];
    reference.limitToLast(100).on('value', (snapshot) => {
      let userData = snapshot.val() || {};
      map(userData, (val) => convertedSnapshot.push(val))
      let users = convertedSnapshot.map(user => user)
      this.props.getAllUserData(users)
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Map/>
      </div>
    )
  };
};

export default userContainer(App);
