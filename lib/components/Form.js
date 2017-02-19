import React, { Component } from 'react';
import firebase, { reference } from '../firebase';

export default class Form extends Component {
  render() {
    return(
      <div>
        <form id='JobForm' onSubmit={this.props.submit}>
          <input name='name' placeholder='name'/>
          <input name='school' placeholder='school'/>
          <input name='company' placeholder='company'/>
          <input name='location' placeholder='city'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}
