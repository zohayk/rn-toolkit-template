/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// All packages are updated in 24.09.2023
// except -> typescript
// for new architecture use react-native-reanimated 3.3.0
