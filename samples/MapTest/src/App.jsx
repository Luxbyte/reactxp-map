/*
 * This file demonstrates basic usage of the Map component
 */

let React, RX;
React = RX = require('reactxp');
let ReactXPMap = require('reactxp-map');

const _styles = {
  container: RX.Styles.createViewStyle({
    flex: 1
  }),
  map: RX.Styles.createViewStyle({
    height: '100%'
  }),
};

class App extends RX.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RX.View style={_styles.container}>
        <ReactXPMap
          style={_styles.map}
          markers={[{latitude: 49.6106573, longitude: 6.1293375, title: "Hello World", description: "This is a description."}]}
          zoom={8}
          latitude={49.8094603}
          longitude={6.1282112}
          showLocation={true}
          apiKey="YOUR_API_KEY"
        />
      </RX.View>
    );
  }
};

module.exports = App;
