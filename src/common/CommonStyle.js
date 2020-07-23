import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {black, yellow, bg_clr} from './Colors';
import {isIphoneX} from 'react-native-iphone-x-helper';
import fontFam from './Fonts';

const iPhone = Platform.OS == 'ios' ? 20 : 0;

export default StyleSheet.create({});
