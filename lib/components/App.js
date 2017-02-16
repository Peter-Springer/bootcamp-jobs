import React, { Component } from 'react';
import firebase, { signIn, signOut, reference } from '../firebase';
import Form from './Form'

export default class App extends Component {

  submit(e) {
    e.preventDefault()
    let job = {
          name: 'hello',
          school: 'hello',
          job: 'hello',
          location: 'hello',
        };
     reference.push(job);
     document.getElementById('JobForm').reset();
    console.log('hello');
  }

  render() {
    return(
      <div>
        <Form submit={(e) => this.submit(e)}/>
      </div>
    )
  }
}
