import React from 'react'

export default class Map extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat: 42, lng: -97},
      zoom: 4
    });
  }

  render() {
    return (
      <div id='map' ref="map">I should be a map!</div>
    );
  }
}
