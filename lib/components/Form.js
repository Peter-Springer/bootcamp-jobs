import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import userContainer from '../containers/userContainer';

class Form extends Component {

  submit(e) {
    e.preventDefault()
    let { name, school, company, location } = e.target
    let pinColor = '';
    school.value.toUpperCase() == 'TURING' ? pinColor = 'blue' : pinColor = 'yellow';
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
      <section className='form-container'>
        <NavBar/>
        <article className='form-directions'>
          <h2>Want to help other BootcampDevs find jobs?</h2>
          <h2>Complete the form below to be featured on our list!</h2>
        </article>
        <form id='JobForm' onSubmit={(e) => this.submit(e)}>
          <input name='name' placeholder='your name'/>
          <input name='school' placeholder='bootcamp attended'/>
          <input name='company' placeholder='current employer'/>
          <input name='location' placeholder='city you live in'/>
          <button className='submit-button' type='submit'>Submit</button>
        </form>
      </section>
    )
  }
}

export default userContainer(Form)
