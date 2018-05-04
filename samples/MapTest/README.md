# MapTest

This app works on React Native (iOS, Android) and web.

### Initial Setup

- Run `npm install`. This fetches the dependencies.

### Set Google Maps API key

[react-native-maps setup instructions](https://github.com/react-community/react-native-maps/blob/master/docs/installation.md)

Set the API key by replacing `YOUR_API_KEY` in:
- Web: `src/App.jsx`
- Android: `android/app/src/main/AndroidManifest.xml`
- iOS: `ios/RXPMapTest/AppDelegate.m`

### Building for Web

- Run `npm run build`. This transpiles the ES6 code.
- Open `index.html` in your browser to view the result.

### Building for React Native

- Run `npm run rn-watch`. This transpiles the ES6 code and watches for changes
- In another command prompt run `npm run android` or `npm run ios`. This starts the React Native Packager and deploys your application.
