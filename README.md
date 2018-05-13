# reactxp-map [![npm version](https://img.shields.io/npm/v/reactxp-map.svg?style=flat)](https://www.npmjs.com/package/reactxp-map)
Plugin for [ReactXP](https://microsoft.github.io/reactxp/) that provides support for Google Maps for Web, Android and iOS.

## Updates
### Version 0.1.6
* Added `getBounds` method to map

### Version 0.1.5
* Added `panToCoordinate` method to map
* Added `zIndex` prop for markers

### Version 0.1.4
* Added `enableWebControls` prop (disabled web controls by default)
* Added `icon` prop for markers

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

### Map Properties
| Prop         | Type            | Default  | Note |
|--------------|-----------------|----------|------|
| latitude     | Float           |          | Initial latitude of the map |
| longitude    | Float           |          | Initial longitude of the map |
| zoom         | Integer         | 8        | Initial zoom level of the map |
| mapType      | String          | "roadmap" | Type of the map. Can be `"roadmap"`, `"satellite"`, `"hybrid"` or `"terrain"`. |
| geolocation  | Boolean         | false    | Enable/Disable location tracking |
| showLocation | Boolean         | false    | Display current location |
| locationText | String          | "Your current location" | Text displayed by the marker on the user location |
| locationIcon | Image           |          | Image to use as a marker icon |
| enableWebControls | Boolean    | false    | Enables default google maps controls on web (web only) |
| apiKey       | String          | "YOUR_API_KEY" | The Google maps [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) |
| style        | StyleObject     | {} | [ReactXP style object](https://microsoft.github.io/reactxp/docs/styles.html) |

### Map methods
| Method          | Arguments                               | Note                    |
|-----------------|-----------------------------------------|-------------------------|
| panToCoordinate | lat: Float, lng Float, duration: Number | Duration is native-only |
| getBounds       |                                         | Returns LatLng of southwestern and northeastern point of the view |

### Marker Properties
| Prop         | Type            | Default  | Note |
|--------------|-----------------|----------|------|
| latitude     | Float           |          | Latitude of the marker |
| longitude    | Float           |          | Longitude of the marker |
| title        | String          | ""       | Title of the marker |
| description  | String          | ""       | Description of the marker (Native only) |
| color        | HexCode         | "FE7569" | Color of the marker |
| icon         | Image           |          | Image to use as a marker icon |
| zIndex       | Ineger          | 0        | Depth at which marker is drawn |
| onPress      | Function        |          | Callback that is triggered when pressing on the marker. Returns `{latitude, longitude}` |

### Direction Properties
| Prop         | Type            | Default  | Note |
|--------------|-----------------|----------|------|
| origin       | LatLng          | null     | Latitude and longitude of the starting point. If null, it uses current user location |
| destination  | LatLng          |          | Latitude and longitude of the destination point |
| travelMode   | String          | "driving"| Travel method. Can be "driving", "walking", "transit" or "bicycling" |
| strokeColor  | String          | "black"  | Color of the polyline |
| strokeWidth  | Integer         | 3        | Width of the polyline in pixels |

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
