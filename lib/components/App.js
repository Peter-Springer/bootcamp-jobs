import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import userContainer from '../containers/userContainer';
import Form from './Form';
import SignIn from './SignIn';
import Map from './Map';

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
    reference.limitToLast(100).on('value', (snapshot) => {
      let userData = snapshot.val() || {};
      return this.props.getAllUserData(userData)
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
          <Map />
        </div>
      )
    };
  };
};

export default userContainer(App);
