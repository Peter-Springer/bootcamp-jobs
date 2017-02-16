import React, { Component } from 'react';
import firebase, { signIn, signOut, reference } from '../firebase';
import Form from './Form';
import SignIn from './SignIn';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
 }

  render() {
    const { user } = this.state;
    if(!user) { return <SignIn /> }
    if(user) {
      return (
        <div>
          <Form />
        </div>
      )
    }
  }
}
