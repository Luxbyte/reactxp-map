'use strict';

// Export web by default. Other platforms have custom index.[platform].js files
var ReactXPMap = require('./dist/web/Map');
var Marker = require('./dist/web/Marker');
var Direction = require('./dist/web/Direction');
var Polyline = require('./dist/web/Polyline');
var Polygon = require('./dist/web/Polygon');
var Circle = require('./dist/web/Circle');

module.exports = {
  ReactXPMap,
  Marker,
  Direction,
  Polyline,
  Polygon,
  Circle
}
