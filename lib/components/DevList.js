import React, { Component } from 'react'
import firebase, { reference } from '../firebase';
import NavBar from './NavBar';
import { map } from 'lodash';
import userContainer from '../containers/userContainer';

class DevList extends Component {

    renderListings() {
      return this.props.userData.map(user => {
        return (
          <article className="listing">
          <p>Name: {user.name}</p>
          <p>School: {user.school}</p>
          <p>Employer: {user.company}</p>
          <p>Location: {user.location}</p>
          </article>
        );
      });
    };

  render() {
    return (
      <section className='dev-list'>
        <NavBar />
        <section className="all-listings">{this.renderListings()}</section>
      </section>
    );
  }
}

export default userContainer(DevList)
