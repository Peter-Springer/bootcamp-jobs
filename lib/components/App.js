import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import userContainer from '../containers/userContainer';
import Form from './Form';
import SignIn from './SignIn';
import Map from './Map';
import { map } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
    };
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.props.getUser(user));
    this.fetchData()
  };

  fetchData() {
    let convertedSnapshot = [];
    reference.limitToLast(100).on('value', (snapshot) => {
      let userData = snapshot.val() || {};
      map(userData, (val) => convertedSnapshot.push(val))
      return this.props.getAllUserData(convertedSnapshot);
    });
  };

  render() {
    const { user } = this.props;
    if(!user) { return <SignIn /> };
    if(user) {
      return (
        <div>
        <h1>Welcome {user.displayName}</h1>
          <Form />
          <Map/>
        </div>
      )
    };
  };
};

export default userContainer(App);
