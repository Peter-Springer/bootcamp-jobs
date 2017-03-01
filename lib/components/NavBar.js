import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase, { signOut } from '../firebase';

import SignIn from './SignIn';
import userContainer from '../containers/userContainer';

class NavBar extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.props.getUser(user));
  };

  render() {
    const { user } = this.props
    if (!user) {
      return(
        <nav>
          <h1>Bootcamp Devs</h1>
          <SignIn />
        </nav>
      )
    } else {
      return(
        <nav className='loggedIn-nav'>
          <h1 className='nav-header'>Bootcamp<span>Devs</span></h1>
          <Link to={'/settings'}><button className="Button">Contribute Data</button></Link>
          <button
            className="Button"
            children="Logout"
            onClick={() => signOut()}
          />
        </nav>
      )
    }
  }
}

export default userContainer(NavBar)
