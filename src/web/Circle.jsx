/*
* Circle.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');

import { Circle as MapCircle } from 'react-google-maps';

class Circle extends React.Component {
  render() {
    let options = {
      strokeColor: this.props.strokeColor || "black",
      strokeWeight: this.props.strokeWidth || 1,
      fillColor: this.props.fillColor || "black",
      fillOpacity: this.props.fillOpacity || 1,
      geodesic: this.props.geodesic
    };
    return (
      <MapCircle center={{lat: this.props.center.latitude, lng: this.props.center.longitude}}
                 radius={this.props.radius}
                 options={options}
      />
    );
  }
}

module.exports = Circle;
