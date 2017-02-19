import React, { Component } from 'react';
import firebase, { signIn, signOut, reference } from '../firebase';
import userContainer from '../containers/userContainer';
import Form from './Form';
import SignIn from './SignIn';
import Map from './Map';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
    };
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.props.getUser(user));
  };

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

  fetchData() {
    reference.limitToLast(100).on('value', (snapshot) => {
      userData = snapshot.val() || {};
      this.setState({
        allData: map(userData, (val) => val)
      });
    });
  };

  render() {
    const { user } = this.props;
    if(!user) { return <SignIn /> };
    if(user) {
      return (
        <div>
        <h1>Welcome {user.displayName}</h1>
          <Form submit={(e) => this.submit(e)}/>
          <Map />
        </div>
      )
    };
  };
};

export default userContainer(App);
