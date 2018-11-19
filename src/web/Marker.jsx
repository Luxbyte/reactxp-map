/*
* Marker.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');

import { Marker as MapMarker } from "react-google-maps"

class Marker extends React.Component {

  getCoordinate = (e, callback) => {
    if (callback) {
      let coordinate = {latitude: e.latLng.lat(), longitude: e.latLng.lng()};
      return callback(coordinate);
    }
  }

  render() {
    let icon = (this.props.icon) ? this.props.icon : "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"+(this.props.color || "FE7569");

    return (
      <MapMarker position={{ lat: this.props.latitude, lng: this.props.longitude }}
                 title={this.props.title}
                 icon={icon}
                 zIndex={this.props.zIndex || 0}
                 onClick={(e) => this.getCoordinate(e, this.props.onPress)}
                 draggable={this.props.draggable}
                 onDragStart={(e) => this.getCoordinate(e, this.props.onDragStart)}
                 onDrag={(e) => this.getCoordinate(e, this.props.onDrag)}
                 onDragEnd={(e) => this.getCoordinate(e, this.props.onDragEnd)}
      />
    );
  }
}

module.exports = Marker;
