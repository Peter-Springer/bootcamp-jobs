import React from 'react'

export default class Map extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat: 42, lng: -97},
      zoom: 4,
      mapTypeId: 'terrain',
    });

    this.marker = new google.maps.Marker({
      position: {lat: 30, lng: -97},
      map: this.map
    });
  }

  //TODO send city to firebase as lat and long
 //TODO map over lat and long and create new instance of markers

  render() {
    return (
      <div id='map' ref="map">map!</div>
    );
  }
}
