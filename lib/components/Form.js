import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  submit() {
    return console.log('hello');
  }
  render() {
    return(
      <div>
        <form onSubmit={() => this.submit()}>
          <input placeholder='name'/>
          <input placeholder='school'/>
          <input placeholder='job'/>
          <input placeholder='location'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}
