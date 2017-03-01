import React, { Component } from 'react'
import axios from 'axios'
import firebase, { reference } from '../firebase';
import userContainer from '../containers/userContainer';
import { map } from 'lodash';

export default class Map extends Component {
  constructor() {
    super()
      this.state = {
        userData: []
      }
  }

  componentDidMount() {
    this.fetchData()
    let map = new google.maps.Map(this.refs.map, {
      center: {lat: 42, lng: -97},
      zoom: 4,
      mapTypeId: 'terrain',
    });
  }

  componentDidUpdate() {
    let map = new google.maps.Map(this.refs.map, {
      center: {lat: 42, lng: -97},
      zoom: 4,
      mapTypeId: 'terrain',
    });
    this.state.userData.forEach(user => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${user.location}&key=AIzaSyDgN9mkMr-d_T6w6Meov0J8hB57sapxjCc`)
        .then(function (response) {
          let coordinate = response.data.results[0].geometry.location;
          this.marker = new google.maps.Marker({
            position: coordinate,
            map: map,
            icon: `http://maps.google.com/mapfiles/ms/icons/${user.color}-dot.png`,
            animation: google.maps.Animation.DROP,
            title: `Name: ${user.name.toUpperCase()} School: ${user.school}`
          })
        })
        .catch(function (error) {
          console.log(error);
        });
    })
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
      <section className='map-container'>
        <div
          id='map'
          ref="map"
        >
          Map of Bootcamp Grads
        </div>
      </section>
    );
  }
}
