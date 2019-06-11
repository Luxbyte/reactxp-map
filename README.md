# reactxp-map [![npm version](https://img.shields.io/npm/v/reactxp-map.svg?style=flat)](https://www.npmjs.com/package/reactxp-map)
Plugin for [ReactXP](https://microsoft.github.io/reactxp/) that provides support for Google Maps for Web, Android and iOS.

## Updates
### Version 0.2.0
* Added Polyline
* Added Polygon
* Added Circle
* Fixed Map onPress when function undefined
* Updated dependencies

### Version 0.1.13
* Updated react-native version

### Version 0.1.10
* Changed react-native to peer-dependency

### Version 0.1.9
* Updated dependencies
* Added `onPress` method to map

### Version 0.1.8
* Added `onMapReady` method to map
* Added dragging support to markers
* Fixed file permission on gradlew

## Documentation

### Prerequisites
* [ReactXP](https://github.com/microsoft/reactxp/)

### Samples
* [MapText](https://github.com/Fulanko/reactxp-map/tree/master/samples/MapTest)

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

[`<Direction/>` Polyline API](docs/polyline.md)

[`<Direction/>` Polygon API](docs/polygon.md)

[`<Direction/>` Circle API](docs/circle.md)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
