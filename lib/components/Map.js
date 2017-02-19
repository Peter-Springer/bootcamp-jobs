import React from 'react'
import axios from 'axios'

export default class Map extends React.Component {

  componentDidMount() {
    let map = new google.maps.Map(this.refs.map, {
      center: {lat: 42, lng: -97},
      zoom: 4,
      mapTypeId: 'terrain',
    });
    
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=Mountain+View,+CA&key=AIzaSyDgN9mkMr-d_T6w6Meov0J8hB57sapxjCc')
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
  }

//TODO break out marker into its own function that will iterate over data to drop pins
//TODO send city to firebase as lat and long
//TODO map over lat and long and create new instance of markers

  render() {
    return (
      <div
        id='map'
        ref="map"
      >
        Map of Bootcamp Grads
      </div>
    );
  }
}
