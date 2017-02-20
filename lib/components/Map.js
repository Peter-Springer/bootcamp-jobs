import React from 'react'
import axios from 'axios'
import userContainer from '../containers/userContainer';

class Map extends React.Component {
  constructor() {
    super()
      this.state = {
        locations: ['Denver', 'Texas', 'New+York']
      }
  }

  componentDidMount() {
    if (this.state.locations.length > 0) {
      let map = new google.maps.Map(this.refs.map, {
        center: {lat: 42, lng: -97},
        zoom: 4,
        mapTypeId: 'terrain',
      });
      this.state.locations.forEach(location => {
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
    } else {
      let map = new google.maps.Map(this.refs.map, {
        center: {lat: 42, lng: -97},
        zoom: 4,
        mapTypeId: 'terrain',
      });
    }
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
      </section>
    );
  }
}

export default userContainer(Map)
