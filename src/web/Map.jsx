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

const GoogleMapComponent = withScriptjs(withGoogleMap(function(props) {
  return (
    <GoogleMap
      ref={(ref)=>props.getMap(ref, google.maps.event.trigger)}
      defaultZoom={8}
      defaultCenter={{ lat: props.la, lng: props.lng }}
      zoom={props.zoom}
      center={{ lat: props.lat, lng: props.lng }}
    >
      {props.showLocation && props.location &&
        <Marker position={{ lat: props.location.latitude, lng: props.location.longitude }}
                title={props.locationText || "Your current location"}
                icon="https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569" />
      }
      {props.markers.map(function (item, index) {
        return (
          <Marker position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }}
                  title={item.title || ""}
                  icon={"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"+(item.color || "FE7569")}
                  key={index} />
        );
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
      location: null
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
        lat={parseFloat(this.props.latitude)}
        lng={parseFloat(this.props.longitude)}
        zoom={this.props.zoom}
        showLocation={this.props.showLocation}
        location={this.state.location}
        locationText={this.props.locationText}
        getMap={this.getMap}
        markers={this.props.markers || []}
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+this.props.apiKey+"&v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<RX.View style={this.props.style || {}} />}
        mapElement={<div style={{ height: `100%` }} ref="map" />}
      />
    );
  }
}

module.exports = ReactXPMap;
