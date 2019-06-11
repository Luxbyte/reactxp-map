/*
 * This file demonstrates basic usage of the Map component
 */

let React, RX;
React = RX = require('reactxp');
let { ReactXPMap, Marker, Direction, Polyline, Polygon, Circle } = require('reactxp-map');
let currentLocationIcon = require('appAssets').currentLocationIcon;

const _styles = {
  container: RX.Styles.createViewStyle({
    flex: 1
  })
};

class App extends RX.Component {
  constructor(props) {
    super(props);
  }

  onPressMap = (e) => {
    console.log(`Pressed map at ${e.latitude} / ${e.longitude}.`);
  }

  onPressMarker = (e) => {
    this.map.panToCoordinate(e.latitude, e.longitude);
  }

  onPressPolyline = (e) => {
    console.log("Pressed Polyline");
  }

  onPressPolygon = (e) => {
    console.log("Pressed Polygon");
  }

  _onRef = (ref) => {
    this.map = ref;
  }

  render() {
    return (
      <ReactXPMap
        style={_styles.container}
        zoom={10}
        mapType="roadmap"
        latitude={49.6106573}
        longitude={6.1293375}
        locationText="You are here!"
        locationIcon={currentLocationIcon}
        onPress={this.onPressMap}
        apiKey="YOUR_API_KEY"
        ref={this._onRef}
      >
        <Marker latitude={49.6119289} longitude={6.1370552} title="Luxembourg City" description="Capital city of Luxembourg" color="00c00c" onPress={this.onPressMarker}/>
        <Marker latitude={49.6285071} longitude={6.2148438} title="Luxembourg Airport" color="2fb6ab" onPress={this.onPressMarker}/>
        <Marker latitude={49.6200000} longitude={6.1800000} title="Draggable Pin" color="227093" draggable={true}/>
        <Direction destination={{latitude: 49.6119289, longitude: 6.1370552}}/>
        <Direction origin={{latitude: 49.6002236, longitude: 6.1333581}} destination={{latitude: 49.609966, longitude: 6.129702}} travelMode="walking" strokeColor="red" strokeWidth={3}/>
        <Polyline coordinates={[{latitude: 49.6002236, longitude: 6.1333581}, {latitude: 52, longitude: 7}]} strokeColor="#ff0000" strokeWidth={3} onPress={this.onPressPolyline} tappable={true}/>
        <Polygon coordinates={[{latitude: 49.6002236, longitude: 6.1333581}, {latitude: 51, longitude: 6.5}, {latitude: 50, longitude: 5.5}]} strokeWidth={2} fillColor="#00c00c" fillOpacity={0.5} onPress={this.onPressPolygon} tappable={true}/>
        <Circle center={{latitude: 50.6002236, longitude: 6.1333581}} radius={10000} strokeWidth={2} fillColor="#0000ff"/>
      </ReactXPMap>
    );
  }
};

module.exports = App;
