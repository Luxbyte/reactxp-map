/*
* Direction.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
let ReactDOM = require('react-dom');
let RX = require('reactxp');

import { DirectionsRenderer } from "react-google-maps"

class Direction extends React.Component {
  constructor(props) {
    super(props);

    this.directionsService = new this.props.googleMap.DirectionsService();
    this.modes = {
      "driving": this.props.googleMap.TravelMode.DRIVING,
      "bicycling": this.props.googleMap.TravelMode.BICYCLING,
      "walking": this.props.googleMap.TravelMode.WALKING,
      "transit": this.props.googleMap.TravelMode.TRANSIT
    }

    this.state = {
      directions: null
    }
  }

  // update directions
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.location && nextProps.destination) {
      this.updateDirections(nextProps);
    }
  }

  updateDirections = (props) => {
    this.directionsService.route({
      origin: (props.origin) ? new props.googleMap.LatLng(props.origin.latitude, props.origin.longitude) : new props.googleMap.LatLng(props.location.latitude, props.location.longitude),
      destination: new props.googleMap.LatLng(props.destination.latitude, props.destination.longitude),
      travelMode: (props.travelMode) ? this.modes[props.travelMode] : this.modes["driving"],
    }, (result, status) => {
      if (status === props.googleMap.DirectionsStatus.OK) {
        this.setState({directions: result});
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
    if (this.state.directions) {
      return <DirectionsRenderer directions={this.state.directions}
                                 options={{
                                   preserveViewport: true,
                                   suppressMarkers: true,
                                   polylineOptions: {strokeWeight: this.props.strokeWidth || 3,
                                                     strokeColor: this.props.strokeColor || "black"}
                                   }
                                 }
             />
    }
    return null;
  }
}

module.exports = Direction;
