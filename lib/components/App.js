import React, { Component } from 'react';
import firebase from '../firebase';
import userContainer from '../containers/userContainer';
import Form from './Form';
import SignIn from './SignIn';
import Map from './Map';

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.props.getUser(user));
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
