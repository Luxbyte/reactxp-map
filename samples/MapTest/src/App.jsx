/*
 * This file demonstrates basic usage of the Map component
 */

let React, RX;
React = RX = require('reactxp');
let ReactXPMap = require('reactxp-map');

const _styles = {
  container: RX.Styles.createViewStyle({
    flex: 1
  })
};

class App extends RX.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactXPMap
        style={_styles.container}
        markers={[{latitude: 49.6106573, longitude: 6.1293375, title: "Hello World", description: "This is a description.", color: "00c00c"},
                  {latitude: 50, longitude: 6, title: "Hello World2", description: "This is a description2.", color: "2fb6ab"},
                  {latitude: 49.5, longitude: 6.2, title: "Hello World3", description: "This is a description3."}]}
        zoom={10}
        latitude={-37.823726}
        longitude={145.0189628}
        showLocation={true}
        locationText="You are here!"
        apiKey="YOUR_API_KEY"
      />
    );
  }
};

module.exports = App;
