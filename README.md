# reactxp-map [![npm version](https://img.shields.io/npm/v/reactxp-map.svg?style=flat)](https://www.npmjs.com/package/reactxp-map)
Plugin for [ReactXP](https://microsoft.github.io/reactxp/) that provides support for Google Maps for Web, Android and iOS.

## Updates (Version 0.1.0)
* Reorganized Markers as components
* Added onPress callback to markers

## Documentation

### Prerequisites
* [ReactXP](https://github.com/microsoft/reactxp/)

### Usage
```javascript
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
```

### Map Properties
| Prop         | Type            | Default  | Note |
|--------------|-----------------|----------|------|
| latitude     | Float           |          | Initial latitude of the map |
| longitude    | Float           |          | Initial longitude of the map |
| zoom         | Integer         | 8        | Initial zoom level of the map |
| mapType      | String          | "roadmap" | Type of the map. Can be `"roadmap"`, `"satellite"`, `"hybrid"` or `"terrain"`. |
| showLocation | Boolean         | false    | Enable location tracking if available |
| locationText | String          | "Your current location" | Text displayed by the marker on the user location |
| apiKey       | String          | "YOUR_API_KEY" | The Google maps [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) |
| style        | StyleObject     | {} | [ReactXP style object](https://microsoft.github.io/reactxp/docs/styles.html) |

### Marker Properties
| Prop         | Type            | Default  | Note |
|--------------|-----------------|----------|------|
| latitude     | Float           |          | Latitude of the marker |
| longitude    | Float           |          | Longitude of the marker |
| title        | String          | ""       | Title of the marker |
| description  | String          | ""       | Description of the marker (Native only) |
| color        | HexCode         | "FE7569" | Color of the marker |
| onPress      | Function        |          | Callback that is triggered when pressing on the marker. Returns `{latitude, longitude}` |

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
