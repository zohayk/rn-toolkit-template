/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// All packages are updated in 04.03.2024
// except -> typescript ~5.1.6
// for new architecture use react-native-reanimated 3.3.0 - need to be tested !!!

// react-native-reanimated ios crashed is corrected here https://github.com/software-mansion/react-native-reanimated/issues/5660
