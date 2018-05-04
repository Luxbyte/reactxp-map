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
let Marker = require('./Marker');
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const GoogleMapComponent = withScriptjs(withGoogleMap(function(props) {

  // pass google.maps and current location to child components
  let childrenWithProps = React.Children.map(props.children, child =>
    React.cloneElement(child, { location: props.location, googleMap: google.maps })
  );

  // enable / disable web controls
  let controls = (props.enableWebControls) ? {
    mapTypeControl: true,
    fullscreenControl: true,
    streetViewControl: true,
    zoomControl: true
  } : {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false
  };
  return (
    <GoogleMap
      ref={(ref)=>props.getMap(ref, google.maps.event.trigger)}
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      zoom={props.zoom}
      defaultMapTypeId={'roadmap'}
      mapTypeId={props.mapType}
      options={controls}
    >
      {props.showLocation && props.location &&
        <Marker latitude={props.location.latitude}
                longitude={props.location.longitude}
                icon={props.locationIcon}
                title={props.locationText || "Your current location"}
        />
      }
      {childrenWithProps}
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
      location: null
    }
  }

  // On mount: start watching user location if requested
  componentDidMount = () => {
    let self = this;
    if (this.props.geolocation) {
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
    if (this.locationWatchId) {
      RX.Location.clearWatch(this.locationWatchId);
    }
  }

  // trigger google maps resize event
  componentDidUpdate = () => {
    if (this.eventTrigger) {
      this.eventTrigger(this.googleMap, 'resize');
    }
  }

  // update user location
  onUpdatePosition = (position) => {
    this.setState({location: {latitude: position.coords.latitude, longitude: position.coords.longitude}});
  }

  // get googleMap object from reference
  // this is needed in order to trigger resize events on the map
  getMap = (ref, trigger) => {
    if (ref) {
      this.googleMap = ref.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
      this.eventTrigger = trigger;
    }
  }

  render() {
    return (
      <GoogleMapComponent
        lat={this.props.latitude}
        lng={this.props.longitude}
        zoom={this.props.zoom}
        mapType={this.props.mapType}
        showLocation={this.props.showLocation}
        location={this.state.location}
        locationText={this.props.locationText}
        locationIcon={this.props.locationIcon}
        enableWebControls={this.props.enableWebControls || false}
        getMap={this.getMap}
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+this.props.apiKey+"&v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<RX.View style={this.props.style || {}} />}
        mapElement={<div style={{ height: `100%` }} ref="map" />}
      >
        {this.props.children}
      </GoogleMapComponent>
    );
  }
}

module.exports = ReactXPMap;
