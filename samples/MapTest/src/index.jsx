let React, RX;
React = RX = require('reactxp');
let App = require('./App');

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);
