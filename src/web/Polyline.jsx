/*
* Polyline.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');

import { Polyline as MapPolyline } from 'react-google-maps';

class Polyline extends React.Component {
  render() {
    let coordinates = this.props.coordinates.map(function(item) {
      return { lat: item.latitude, lng: item.longitude };
    });
    let options = {
      strokeColor: this.props.strokeColor || "black",
      strokeWeight: this.props.strokeWidth || 1,
      geodesic: this.props.geodesic,
      clickable: this.props.tappable || false
    };
    return (
      <MapPolyline path={coordinates}
                   options={options}
                   onClick={this.props.onPress}
      />
    );
  }
}

module.exports = Polyline;
