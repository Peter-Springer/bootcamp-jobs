import React from 'react'
import axios from 'axios'
import firebase, { reference } from '../firebase';
import { map } from 'lodash';
import userContainer from '../containers/userContainer';

class Map extends React.Component {
  componentDidMount() {
    this.fetchUserData()
  }

  componentDidUpdate() {
    this.handleMappingLocations(this.handleUserLocations())
  }

  fetchUserData() {
    let convertedSnapshot = [];
    reference.limitToLast(100).on('value', (snapshot) => {
      let userData = snapshot.val() || {};
      map(userData, (val) => convertedSnapshot.push(val))
      return this.props.getAllUserData(convertedSnapshot);
    });
  };

  handleUserLocations() {
     return this.props.userData.map((user) => user.location)
  };

  handleMappingLocations(locations) {
    let map = new google.maps.Map(this.refs.map, {
      center: {lat: 42, lng: -97},
      zoom: 4,
      mapTypeId: 'terrain',
    });

    locations.forEach(location => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDgN9mkMr-d_T6w6Meov0J8hB57sapxjCc`)
      .then(function (response) {
        let coordinate = response.data.results[0].geometry.location;
        this.marker = new google.maps.Marker({
          position: coordinate,
          map: map
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    })
  }

//TODO figure out how to set locations into redux and then pull out in prop

  render() {
    return (
      <section>
      <h1>{this.props.user.displayName}</h1>
      <div
        id='map'
        ref="map"
      >
        Map of Bootcamp Grads
      </div>
      <button onClick={() => this.handleUserLocations()}>ok</button>
      </section>
    );
  }
}

export default userContainer(Map)
