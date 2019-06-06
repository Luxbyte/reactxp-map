/*
* Direction.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
*/

let React = require('react');
import MapViewDirections from 'react-native-maps-directions';

class Direction extends React.Component {
  constructor(props) {
    super(props);

    this.modes = {
      "driving": "DRIVING",
      "bicycling": "BICYCLING",
      "walking": "WALKING",
      "transit": "TRANSIT",
    }
  }

  render() {
    return <MapViewDirections origin={this.props.origin ? this.props.origin : this.props.location}
                              destination={this.props.destination}
                              apikey={this.props.apiKey}
                              mode={(this.props.travelMode) ? this.modes[this.props.travelMode] : this.modes["driving"]}
                              strokeWidth={this.props.strokeWidth || 3}
                              strokeColor={this.props.strokeColor || "black"}
           />;
  }
}

module.exports = Direction;
