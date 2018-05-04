/*
 * This file demonstrates basic usage of the Map component
 */

let React, RX;
React = RX = require('reactxp');

let { ReactXPMap, Marker, Direction } = require('reactxp-map');

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

  showMessage = (e) => {
    console.log('pressed!')
    console.log(e)
  }

  render() {
    return (
      <ReactXPMap
        style={_styles.container}
        zoom={10}
        mapType="roadmap"
        latitude={49.6106573}
        longitude={6.1293375}
        geolocation={true}
        showLocation={true}
        locationText="You are here!"
        locationIcon={currentLocationIcon}
        apiKey="YOUR_API_KEY"
      >
        <Marker latitude={49.6119289} longitude={6.1370552} title="Luxembourg City" description="Capital city of Luxembourg" color="00c00c" onPress={this.showMessage}/>
        <Marker latitude={49.6285071} longitude={6.2148438} title="Luxembourg Airport" color="2fb6ab" onPress={this.showMessage}/>
        <Direction destination={{latitude: 49.6119289, longitude: 6.1370552}}/>
        <Direction origin={{latitude: 49.6002236, longitude: 6.1333581}} destination={{latitude: 49.609966, longitude: 6.129702}} travelMode="walking" strokeColor="red" strokeWidth={3}/>
      </ReactXPMap>
    );
  }
};

module.exports = App;
