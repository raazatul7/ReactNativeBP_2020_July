/**
 * Author : Atul Raj Gupta : https://github.com/raazatul7
 * Peeps React Native App
 * rep url :
 *
 */

import {AppRegistry, Text} from 'react-native';
import App from './src/index.js';
// import App from './App';
import {name as appName} from './app.json';
GLOBAL = require('./src/common/Global');
Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
AppRegistry.registerComponent(appName, () => App);
