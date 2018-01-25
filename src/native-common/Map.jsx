/*
* Map.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
* Native-specific implementation of the cross-platform abstraction for Google Maps
*/

let React = require('react');
let RX = require('reactxp');
let ReactDOM = require('react-dom');
let MapView = require('react-native-maps');

const _styles = {
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
};

class ReactXPMap extends React.Component {
  constructor(props) {
    super(props);

    this.locationWatchId = null;

    this.state = {
      location: {latitude: 0, longitude: 0}
    }
  }

  componentDidMount = () => {
    let self = this;
    if (this.props.showLocation) {
      RX.Location.getCurrentPosition({}).then(function(position) {
        self.setState({location: {latitude: position.coords.latitude, longitude: position.coords.longitude}});
      });
      RX.Location.watchPosition(this.onUpdatePosition, this.onError, {}).then(function(locationWatchId) {
        self.locationWatchId = locationWatchId;
      });
    }
  }

  componentWillUnmount = () => {
    if (this.props.showLocation) {
      RX.Location.clearWatch(this.locationWatchId);
    }
  }

  onUpdatePosition = (position) => {
    this.setState({location: {latitude: position.coords.latitude, longitude: position.coords.longitude}});
  }

  render() {
    return (
      <RX.View style={ this.props.style }>
        <MapView
          style={ _styles.map }
          initialRegion={{
            latitude: parseFloat(this.props.latitude) || 49.8094603,
            longitude: parseFloat(this.props.longitude) || 6.1282112,
            latitudeDelta: 0.922,
            longitudeDelta: 0.421
          }}
        >
          {this.props.showLocation &&
            <MapView.Marker
              coordinate={this.state.location}
            />
          }
          {this.props.markers.map(function (item, index) {
            return (
              <MapView.Marker
                coordinate={{ latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude) }}
                title={item.title || ""}
                description={item.description || ""}
                key={index}
              />
            )
          })}
        </MapView>
      </RX.View>
    );
  }
}

module.exports = ReactXPMap;
