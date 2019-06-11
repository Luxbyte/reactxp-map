/*
* Polyline.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');

import { Polyline as MapPolyline } from 'react-native-maps';

class Polyline extends React.Component {
  render() {
    let onPress = (e) => {
      if (this.props.onPress) {
        this.props.onPress(e);
      }
      e.stopPropagation();
    }
    return (
      <MapPolyline coordinates={this.props.coordinates}
                   strokeColor={this.props.strokeColor || "black"}
                   strokeWidth={this.props.strokeWidth || 1}
                   geodesic={this.props.geodesic}
                   tappable={this.props.tappable || false}
                   onPress={onPress}
      />
    );
  }
}

module.exports = Polyline;
