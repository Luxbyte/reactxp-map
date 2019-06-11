/*
* Polygon.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');

import { Polygon as MapPolygon } from 'react-google-maps';

class Polygon extends React.Component {
  render() {
    let coordinates = this.props.coordinates.map(function(item) {
      return { lat: item.latitude, lng: item.longitude };
    });
    let options = {
      strokeColor: this.props.strokeColor || "black",
      strokeWeight: this.props.strokeWidth || 1,
      fillColor: this.props.fillColor || "black",
      fillOpacity: this.props.fillOpacity || 1,
      geodesic: this.props.geodesic,
      clickable: this.props.tappable || false
    };
    return (
      <MapPolygon paths={coordinates}
                  options={options}
                  onClick={this.props.onPress}
      />
    );
  }
}

module.exports = Polygon;
