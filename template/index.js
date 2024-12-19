/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// except -> react 18.3.1
// except -> @types/react 18.3.3
// except -> @types/react-test-renderer 18.3.0
// except -> react-test-renderer 18.3.1
// except -> typescript 5.1.6
// except -> eslint 8.57.0
