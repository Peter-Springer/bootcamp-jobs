import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import NavBar from './NavBar';
import userContainer from '../containers/userContainer';

class Form extends Component {

  submit(e) {
    e.preventDefault()
    let { name, school, company, location } = e.target
    let pinColor = '';
    school.value.toUpperCase() == 'TURING' ? pinColor = 'blue' : pinColor = 'red';
    let userInfo = {
      name: name.value,
      school: school.value.toUpperCase(),
      company: company.value,
      location: location.value,
      email: this.props.user.email,
      photoURL: this.props.user.photoURL,
      color: pinColor
    };
    reference().set(userInfo);
    document.getElementById('JobForm').reset();
  };

  render() {
    return(
      <div className='form-container'>
        <NavBar/>
        <form id='JobForm' onSubmit={(e) => this.submit(e)}>
          <input name='name' placeholder='your name'/>
          <input name='school' placeholder='bootcamp attended'/>
          <input name='company' placeholder='current employer'/>
          <input name='location' placeholder='city you live in'/>
          <button className='submit-button' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default userContainer(Form)
