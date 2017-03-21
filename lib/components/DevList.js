import React, { Component } from 'react'
import firebase, { reference } from '../firebase';
import NavBar from './NavBar';
import { map } from 'lodash';
import userContainer from '../containers/userContainer';

class DevList extends Component {
  constructor(props) {
    super()
    this.state = {
      users: props.userData
    }
  }

  renderListings() {
    return this.state.users.map(user => {
      return (
        <article className="listing" key={user.email}>
        <p>Name: {user.name}</p>
        <p>School: {user.school}</p>
        <p>Employer: {user.company}</p>
        <p>Location: {user.location}</p>
        <img className='user-photo'src={user.photoURL} alt='user photo'/>
        <button
          hidden={this.checkUserEmail(user.email)}
          onClick={(user) => this.deleteListing(user)}
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

  deleteListing(user) {
    firebase.database().ref(`users/${this.props.user.uid}`).remove();
    let convertedSnapshot = [];
    firebase.database().ref('users/').limitToLast(100).on('value', (snapshot) => {
      let userData = snapshot.val() || {};
      map(userData, (val) => convertedSnapshot.push(val))
      let users = convertedSnapshot.map(user => user)
      this.props.getAllUserData(users)
    });
    this.setState({users: this.props.userData})
  }

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
