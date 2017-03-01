import React, { Component } from 'react'
import firebase, { reference } from '../firebase';
import NavBar from './NavBar';
import { map } from 'lodash';

export default class DevList extends Component {
  constructor() {
    super()
      this.state = {
        userData: []
      }
  }

  componentDidMount() {
    this.fetchData()
  }


    renderListings() {
      return this.state.userData.map(user => <article className="listing">
                                               <p>
                                                 {user.name}
                                               </p>
                                               <p>
                                                 {user.school}
                                               </p>
                                               <p>
                                                 {user.company}
                                               </p>
                                               <p>
                                                 {user.location}
                                               </p>
                                         </article>)
    }

  fetchData() {
    let convertedSnapshot = [];
    reference.limitToLast(100).on('value', (snapshot) => {
      let userData = snapshot.val() || {};
      map(userData, (val) => convertedSnapshot.push(val))
      let users = convertedSnapshot.map(user => user)
      this.setState({ userData: users })
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
