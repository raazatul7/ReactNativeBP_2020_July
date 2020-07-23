import {Icon, Thumbnail} from 'native-base';
import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Utils from '../../common/Utils';
import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';
import {DrawerItems} from 'react-navigation-drawer';
import bg_design from '../../assets/design.png';
import footer_bar from '../../assets/bottom_color_bar.png';
import fontFam from '../../common/Fonts';
import LocalStorage from '../../common/LocalStorage';
import {quiz_clr, red_clr} from '../../common/Colors';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      member_id: '',
      profile_pic: '',
      userData: {},
      appData: {},
    };
  }

  componentDidMount = async () => {
    let userData = await LocalStorage.read('userData');
    let appData = await LocalStorage.read('appData');
    this.setState({
      userData: userData,
      appData: appData,
    });
  };

  goToDonateLink = () => {
    let url = this.state.appData.Donate_Link;
    if (Utils.isEmpty(url)) {
      alert('No URL found.');
    } else {
      Linking.openURL(url).catch((err) => alert('Somethng went wrong', err));
    }
  };

  render() {
    const {userData, appData} = this.state;
    let IsVolunteer =
      GLOBAL.IS_VOLUNTEER == '' ? appData.IsVolunteer : GLOBAL.IS_VOLUNTEER;

    return (
      <View style={{flex: 1, backgroundColor: '#fffbf4'}}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={{alignItems: 'flex-end', margin: wp('8%')}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.closeDrawer()}>
              <Icon name="close" style={{fontSize: wp('10%')}} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}
            style={{
              position: 'absolute',
              marginTop: wp('10%'),
              marginStart: wp('5%'),
            }}>
            <Thumbnail
              large
              source={{
                uri:
                  GLOBAL.PROFILE_PIC == ''
                    ? userData.profile_pic
                    : GLOBAL.PROFILE_PIC,
              }}
            />
          </TouchableOpacity>
          <View style={{marginVertical: wp('8%'), marginStart: wp('8%')}}>
            <Text
              style={{
                color: '#005353',
                fontSize: hp('2.5%'),
                fontFamily: fontFam.medium,
              }}>
              {GLOBAL.USERNAME == '' ? userData.full_name : GLOBAL.USERNAME}
            </Text>
            <Text
              style={{
                color: '#434343',
                fontSize: hp('1.8%'),
                fontFamily: fontFam.semi_bold,
              }}>
              {GLOBAL.MEMBER_ID == '' ? userData.display_id : GLOBAL.MEMBER_ID}
              {IsVolunteer === 'True' && (
                <Text>
                  {' | '}
                  <Text style={{color: red_clr}}>{'Volunteer'}</Text>
                </Text>
              )}
            </Text>
            <Text style={{color: '#434343', fontFamily: fontFam.medium}}>
              {userData.relationship}
            </Text>
            {IsVolunteer === 'True' && (
              <Button
                style={styles.btn}
                onPress={() => this.props.navigation.navigate('Volunteer')}>
                <Text style={styles.btn_text}>Verify Tickets</Text>
              </Button>
            )}
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.divider} />
            <Image source={bg_design} style={styles.bg_pattern} />
          </View>
          <DrawerItems
            {...this.props}
            labelStyle={{
              color: '#323534',
              fontFamily: fontFam.regular,
              fontSize: hp('2%'),
            }}
            onItemPress={(route, focused) => {
              if (route.route.routeName == 'Donate') {
                return this.goToDonateLink();
              } else {
                this.props.navigation.navigate(route.route.routeName);
              }
            }}
          />
        </ScrollView>
        <View style={{width: '100%', justifyContent: 'flex-end'}}>
          <Image source={footer_bar} style={styles.footer} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg_pattern: {
    height: wp('65%'),
    width: wp('40%'),
    overflow: 'visible',
    resizeMode: 'contain',
    position: 'absolute',
    right: -wp('22%'),
    top: -wp('32%'),
    opacity: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.3,
    width: '100%',
    left: -wp('17%'),
  },
  footer: {
    resizeMode: 'contain',
    width: '100%',
    bottom: -wp('2%'),
  },
  btn: {
    zIndex: 1,
    height: wp('9%'),
    width: wp('35%'),
    marginTop: wp('2%'),
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: quiz_clr,
  },
  btn_text: {
    color: '#fff',
    fontSize: hp('2%'),
    fontFamily: fontFam.medium,
  },
});

export default withNavigation(DrawerContent);
