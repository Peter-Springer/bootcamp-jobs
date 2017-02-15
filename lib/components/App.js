import React, { Component } from 'react';
import firebase, { signIn, signOut, reference } from '../firebase';
import Form from './Form'

export default class App extends Component {
  render() {
    return(
      <div>
        <h1>Yoooo</h1>
        <Form/>
      </div>
    )
  }
}
