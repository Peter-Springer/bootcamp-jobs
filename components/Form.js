import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return(
      <div>
        <form>
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
