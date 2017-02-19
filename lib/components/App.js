import React, { Component } from 'react';
import firebase, { signIn, signOut, reference } from '../firebase';
import Form from './Form';
import SignIn from './SignIn';
import Map from './Map';

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

  submit(e) {
    e.preventDefault()
    let { name, school, company, location } = e.target
    let userInfo = {
          name: name.value,
          school: school.value,
          company: company.value,
          location: location.value,
        };
     reference.push(userInfo);
     document.getElementById('JobForm').reset();
  }

  render() {
    const { user } = this.state;
    if(!user) { return <SignIn /> }
    if(user) {
      return (
        <div>
        <h1>Welcome {user.displayName}</h1>
          <Form submit={(e) => this.submit(e)}/>
          <Map/>
        </div>
      )
    }
  }
}
