/*
* Polygon.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');

import { Polygon as MapPolygon } from 'react-native-maps';
import { hexToRgba } from '../helpers.js';

class Polygon extends React.Component {
  render() {
    let onPress = (e) => {
      if (this.props.onPress) {
        this.props.onPress(e);
      }
      e.stopPropagation();
    }
    return (
      <MapPolygon coordinates={this.props.coordinates}
                  strokeColor={this.props.strokeColor || "black"}
                  strokeWidth={this.props.strokeWidth || 1}
                  fillColor={hexToRgba((this.props.fillColor || "#000"), (this.props.fillOpacity || 1))}
                  geodesic={this.props.geodesic}
                  tappable={this.props.tappable || false}
                  onPress={onPress}
      />
    );
  }
}

module.exports = Polygon;
