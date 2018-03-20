'use strict';

// Export web by default. Other platforms have custom index.[platform].js files
var ReactXPMap = require('./dist/web/Map');
var Marker = require('./dist/web/Marker');
var Direction = require('./dist/web/Direction');

module.exports = {
  ReactXPMap,
  Marker,
  Direction
}
