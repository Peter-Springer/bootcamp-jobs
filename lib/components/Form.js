import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  submit(e) {
    e.preventDefault()
    console.log('hello');
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.submit(e)}>
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
