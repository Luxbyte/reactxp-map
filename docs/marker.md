### Marker Properties
| Prop         | Type            | Default  | Note |
|--------------|-----------------|----------|------|
| latitude     | Float           |          | Latitude of the marker |
| longitude    | Float           |          | Longitude of the marker |
| title        | String          | ""       | Title of the marker |
| description  | String          | ""       | Description of the marker (Native only) |
| color        | HexCode         | "FE7569" | Color of the marker |
| icon         | Image           |          | Image to use as a marker icon |
| zIndex       | Integer         | 0        | Depth at which marker is drawn |
| draggable    | Boolean         | false    | Enable/Disable marker dragging |
| onPress      | Function        |          | Callback that is fired when pressing on the marker. Returns `{latitude, longitude}` |
| onDragStart  | Function        |          | Callback that is fired at the start of dragging |
| onDrag       | Function        |          | Callback that is fired at during dragging |
| onDragEnd    | Function        |          | Callback that is fired at the end of dragging |
