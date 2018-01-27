# reactxp-map [![npm version](https://img.shields.io/npm/v/reactxp-map.svg?style=flat)](https://www.npmjs.com/package/reactxp-map)
Plugin for [ReactXP](https://microsoft.github.io/reactxp/) that provides support for Google Maps for Web, Android and iOS.

## Updates (Version 0.0.5)
* Customizable marker colors
* Fixed zoom level on android and iOS
* Removed incorrect marker when location unknown

## Documentation

### Prerequisites
* [ReactXP](https://github.com/microsoft/reactxp/)

### Usage
```javascript
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
```

### Map Properties
| Prop         | Type            | Default  | Note |
|--------------|-----------------|----------|------|
| latitude     | Float           |          | Initial latitude of the map |
| longitude    | Float           |          | Initial longitude of the map |
| zoom         | Integer         | 8        | Initial zoom level of the map |
| showLocation | Boolean         | false    | Enable location tracking if available |
| locationText | String          | "Your current location" | Text displayed by the marker on the user location |
| markers      | List of Markers | [] | List of Marker objects to be displayed on the map. Each marker is defined by `latitude`, `longitude`, `title`, `description` and `color` |
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

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
