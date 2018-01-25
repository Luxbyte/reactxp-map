/*
* Map.jsx
* Copyright (c) Luxbyte SARLS. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform abstraction for Google Maps
*/

let React = require('react');
let ReactDOM = require('react-dom');
let RX = require('reactxp');
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap(function(props) {
  return (
    <GoogleMap
      ref={(ref)=>props.getMap(ref, google.maps.event.trigger)}
      defaultZoom={8}
      defaultCenter={{ lat: props.la, lng: props.lng }}
      zoom={props.zoom}
      center={{ lat: props.lat, lng: props.lng }}
    >
      {props.showLocation &&
        <Marker position={{ lat: props.location.latitude, lng: props.location.longitude }} />
      }
      {props.markers.map(function (item, index) {
        return <Marker position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }} title={item.title || ""} key={index} />
      })}
    </GoogleMap>
  )
}));

class ReactXPMap extends React.Component {
  constructor(props) {
    super(props);

    this.locationWatchId = null;
    this.eventTrigger = null;
    this.googleMap = null;

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

  componentDidUpdate = () => {
    if (this.eventTrigger) {
      this.eventTrigger(this.googleMap, 'resize');
    }
  }

  onUpdatePosition = (position) => {
    this.setState({location: {latitude: position.coords.latitude, longitude: position.coords.longitude}});
  }

  getMap = (ref, trigger) => {
    if (ref) {
      this.googleMap = ref.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
      this.eventTrigger = trigger;
    }
  }

  render() {
    return (
      <MyMapComponent
        lat={parseFloat(this.props.latitude)}
        lng={parseFloat(this.props.longitude)}
        zoom={this.props.zoom}
        showLocation={this.props.showLocation}
        location={this.state.location}
        getMap={this.getMap}
        markers={this.props.markers || []}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzqsmDN0UZEvAVsRsn9MfuYk3S7NhBTk0&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<RX.View style={this.props.style || {}} />}
        mapElement={<div style={{ height: `100%` }} ref="map" />}
      />
    );
  }
}

module.exports = ReactXPMap;
