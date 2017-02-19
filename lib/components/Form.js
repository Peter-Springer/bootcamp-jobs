import React, { Component } from 'react';
import firebase, { reference } from '../firebase';

export default class Form extends Component {

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
  };

  render() {
    return(
      <div>
        <form id='JobForm' onSubmit={() => this.submit(e)}>
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
