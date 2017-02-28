import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import userContainer from '../containers/userContainer';
import Form from './Form';
import SignIn from './SignIn';
import Map from './Map';

class App extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.props.getUser(user));
  };

  render() {
    const { user } = this.props;
    if(!user) { return <SignIn /> };
    if(user) {
      return (
        <div>
          <h1>Welcome {user.displayName}</h1>
          <Link to={'/settings'}><button>Settings</button></Link>
          <Map/>
        </div>
      )
    };
  };
};

export default userContainer(App);
