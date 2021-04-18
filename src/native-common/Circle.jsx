/*
* Circle.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');

import { Circle as MapCircle } from 'react-native-maps';
import { hexToRgba } from '../helpers.js';

class Circle extends React.Component {
  render() {
    return (
      <MapCircle center={{latitude: this.props.center.latitude, longitude: this.props.center.longitude}}
                 radius={this.props.radius}
                 strokeColor={this.props.strokeColor || "black"}
                 strokeWidth={this.props.strokeWidth || 1}
                 fillColor={hexToRgba((this.props.fillColor || "#000"), (this.props.fillOpacity || 1))}
                 geodesic={this.props.geodesic}
      />
    );
  }
}

module.exports = Circle;
