/*
 * This file demonstrates basic usage of the Map component
 */

let React, RX;
React = RX = require('reactxp');

let { ReactXPMap, Marker } = require('reactxp-map');

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
        showLocation={true}
        locationText="You are here!"
        apiKey="YOUR_API_KEY"
      >
        <Marker latitude={49.6106573} longitude={6.1293375} title="Hello World" description="test" color="00c00c" onPress={this.showMessage}/>
        <Marker latitude={50} longitude={6} title="title2" description="test2" color="2fb6ab" onPress={this.showMessage}/>
        <Marker latitude={49.5} longitude={6.2} title="title3" description="test3" onPress={this.showMessage}/>
      </ReactXPMap>
    );
  }
};

module.exports = App;
