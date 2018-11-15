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

  getCoordinate = (coordinate, callback) => {
    if (callback) {
      return callback(coordinate);
    }
  }

  render() {
    let coordinate = { latitude: this.props.latitude, longitude: this.props.longitude };
    return (
      <MapMarker coordinate={coordinate}
                 title={this.props.title}
                 description={this.props.description}
                 pinColor={"#"+(this.props.color || "FE7569")}
                 image={this.props.icon}
                 style={{zIndex: this.props.zIndex || 0}}
                 onPress={(e) => this.getCoordinate(coordinate, this.props.onPress)}
                 draggable={this.props.draggable}
                 onDragStart={(e) => this.getCoordinate(e.coordinate, this.props.onDragStart)}
                 onDrag={(e) => this.getCoordinate(e.coordinate, this.props.onDrag)}
                 onDragEnd={(e) => this.getCoordinate(e.coordinate, this.props.onDragEnd)}
      />
    );
  }
}

module.exports = Marker;
