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
| onMapReady   | Function        |          | Callback that is fired when the map has finished loading |
| onPress      | Function        |          | Callback that is fired when the map is pressed. Returns `{latitude, longitude}` |
| apiKey       | String          | "YOUR_API_KEY" | The Google maps [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) |
| style        | StyleObject     | {} | [ReactXP style object](https://microsoft.github.io/reactxp/docs/styles.html) |

### Map methods
| Method          | Arguments                               | Note                    |
|-----------------|-----------------------------------------|-------------------------|
| panToCoordinate | lat: `Float`, lng: `Float`, duration: `Number` | Duration is native-only |
| getBounds       |                                         | Returns LatLng of southwestern and northeastern point of the view |
