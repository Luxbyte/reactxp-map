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
let Marker = require('./Marker');

const _styles = {
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
};

const MapType = {
  'roadmap': 'standard',
  'satellite': 'satellite',
  'terrain': 'terrain',
  'hybrid': 'hybrid'
}

class ReactXPMap extends React.Component {
  constructor(props) {
    super(props);

    this.locationWatchId = null;

    this.state = {
      location: null,
      layout: null
    }
  }

  // On mount: start watching user location if requested
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

  // stop watching user location
  componentWillUnmount = () => {
    if (this.props.showLocation) {
      RX.Location.clearWatch(this.locationWatchId);
    }
  }

  // update user location
  onUpdatePosition = (position) => {
    this.setState({location: {latitude: position.coords.latitude, longitude: position.coords.longitude}});
  }

  // rerender if layout changes (e.g. orientation change)
  onLayout = (layoutInfo) => {
    this.setState({layout: {...layoutInfo}});
  }

  // calculate latitude delta and longitude delta using provided zoomLevel
  getDeltaFromZoom = (zoom) => {
    const ratio = 156543.03392;
    const latPerMeter = 111111;
    const zoomCorrection = 2;

    let metersPerPixel = ratio * Math.cos(parseFloat(this.props.latitude) * Math.PI / 180) / Math.pow(2, zoom);
    let metersX = this.state.layout.width / 2 * metersPerPixel;
    let metersY = this.state.layout.height / 2 * metersPerPixel;

    let latitude = metersY / (latPerMeter / zoomCorrection);
    let longitude = metersX / ((latPerMeter / zoomCorrection) * Math.cos(parseFloat(this.props.latitude)));

    return {latitude, longitude};
  }

  render() {
    let mapView = null;

    // pass google.maps and current location to child components
    let childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { location: this.state.location, apiKey: this.props.apiKey })
    );

    if (this.state.layout) {
      let delta = this.getDeltaFromZoom(this.props.zoom || 8);
      mapView = (
        <MapView
          style={ _styles.map }
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: delta.latitude,
            longitudeDelta: delta.longitude
          }}
          provider="google"
          mapType={MapType[this.props.mapType] || "standard"}
        >
          {this.props.showLocation && this.state.location &&
            <Marker latitude={this.state.location.latitude}
                    longitude={this.state.location.longitude}
                    title={this.props.locationText|| "Your current location"}
            />
          }
          {childrenWithProps}
        </MapView>
      );
    }

    return (
      <RX.View style={ this.props.style } onLayout={this.onLayout}>
        {mapView}
      </RX.View>
    );
  }
}

module.exports = ReactXPMap;
