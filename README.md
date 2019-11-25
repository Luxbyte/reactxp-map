# reactxp-map [![npm version](https://img.shields.io/npm/v/reactxp-map.svg?style=flat)](https://www.npmjs.com/package/reactxp-map)
Plugin for [ReactXP](https://microsoft.github.io/reactxp/) that provides support for Google Maps for Web, Android and iOS.

## Installation
```
npm install --save reactxp-map
```

### Prerequisites
* [ReactXP](https://github.com/microsoft/reactxp/)
* [react-native-maps installation steps](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md)

## Updates
### Version 0.2.1
* Use "react-native-geolocation-service" to fix crashes on Android if GPS is turned off

### Version 0.2.0
* Added Polyline
* Added Polygon
* Added Circle
* Fixed Map onPress when function undefined
* Updated dependencies

## Documentation

### Samples
* [MapTest](https://github.com/Fulanko/reactxp-map/tree/master/samples/MapTest)

### Usage
```javascript
<ReactXPMap
  style={_styles.container}
  zoom={10}
  mapType="roadmap"
  latitude={49.6106573}
  longitude={6.1293375}
  geolocation={true}
  showLocation={true}
  locationText="You are here!"
  apiKey="YOUR_API_KEY"
>
  <Marker latitude={49.6119289} longitude={6.1370552} title="Luxembourg City" description="Capital city of Luxembourg" color="00c00c" onPress={this.showMessage}/>
  <Marker latitude={49.6285071} longitude={6.2148438} title="Luxembourg Airport" color="2fb6ab" onPress={this.showMessage}/>
  <Direction destination={{latitude: 49.6119289, longitude: 6.1370552}}/>
  <Direction origin={{latitude: 49.6002236, longitude: 6.1333581}} destination={{latitude: 49.609966, longitude: 6.129702}} travelMode="walking" strokeColor="red" strokeWidth={3}/>
</ReactXPMap>
```

## Component API

[`<Map/>` Component API](docs/map.md)

[`<Marker/>` Component API](docs/marker.md)

[`<Direction/>` Component API](docs/direction.md)

[`<Polyline/>` Component API](docs/polyline.md)

[`<Polygon/>` Component API](docs/polygon.md)

[`<Circle/>` Component API](docs/circle.md)

## Troubleshooting

### Geolocating does not work on Android

Make sure you have set the ACCESS_FINE_LOCATION permission in your AndroidManifest.xml.

If you are using Android API23+ you need to ask for the ACCESS_FINE_LOCATION permission at runtime.
See https://facebook.github.io/react-native/docs/permissionsandroid for more information.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
