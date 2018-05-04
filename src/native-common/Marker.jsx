/*
* Marker.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');

import { Marker as MapMarker } from 'react-native-maps';

class Marker extends React.Component {

  getCoordinate = (e, callback) => {
    if (callback) {
      let coordinate = {latitude: e.coordinate.latitude, longitude: e.coordinate.longitude};
      return callback(coordinate);
    }
  }

  render() {
    return (
      <MapMarker coordinate={{ latitude: this.props.latitude, longitude: this.props.longitude }}
                 title={this.props.title}
                 description={this.props.description}
                 pinColor={"#"+(this.props.color || "FE7569")}
                 image={this.props.icon}
                 onPress={(e) => this.getCoordinate(e.nativeEvent, this.props.onPress)}
      />
    );
  }
}

module.exports = Marker;
