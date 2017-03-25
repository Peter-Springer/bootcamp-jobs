import React, { Component } from 'react'
import firebase, { reference } from '../firebase';
import NavBar from './NavBar';
import { map } from 'lodash';
import userContainer from '../containers/userContainer';

class DevList extends Component {

  renderListings(userData) {
    return userData.map(user => {
      return (
        <article className="listing" key={user.email}>
        <p>Name: {user.name}</p>
        <p>School: {user.school}</p>
        <p>Employer: {user.company}</p>
        <p>Location: {user.location}</p>
        <img className='user-photo'src={user.photoURL} alt='user photo'/>
        <button
          hidden={this.checkUserEmail(user.email)}
          onClick={() => this.deleteListing()}
        >
          Delete
        </button>
        </article>
      );
    });
  };

  checkUserEmail(email) {
    return this.props.user.email !== email
  }

  deleteListing() {
    firebase.database().ref(`users/${this.props.user.uid}`).remove()
  }

  searchUsers(e) {
    let searchText = e.target.value.toLowerCase()
    if (searchText) {
      let filtered = this.props.userData.filter((user) =>
      user.school.toLowerCase().includes(searchText) ||
      user.name.toLowerCase().includes(searchText) ||
      user.company.toLowerCase().includes(searchText) ||
      user.location.toLowerCase().includes(searchText))
      this.props.getAllUserData(filtered)
    } else {
      firebase.database().ref('users/').limitToLast(100).on('value', (snapshot) => {
        let convertedSnapshot = [];
        let userData = snapshot.val() || {};
        map(userData, (val) => convertedSnapshot.push(val))
        let users = convertedSnapshot.map(user => user)
        this.props.getAllUserData(users)
      });
    }
  }

  render() {
    return (
      <section className='dev-list'>
        <NavBar />
        <input placeholder='search' onKeyUp={(e) => this.searchUsers(e)}/>
        <section className="all-listings">
          {this.renderListings(this.props.userData)}
        </section>
      </section>
    );
  }
}

export default userContainer(DevList)
