//NOTE: Polls and Home ads are coded on respective pages.

import React, {Component} from 'react';
import {View, Image, Linking, TouchableOpacity} from 'react-native';
import SwiperView from './SwiperView';
import LocalStorage from './LocalStorage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {postApi} from './Api';

export default class AdBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AdvertiseList: [],
      switchingTime: '',
    };
  }

  componentDidMount = async () => {
    let adsData = await LocalStorage.read('adsData');
    if (adsData.AdvertiseList.length > 0) {
      this.setState({
        AdvertiseList: adsData.AdvertiseList,
        switchingTime: parseInt(adsData.SwitchingTime),
      });
    }
  };

  onAdClick = item => {
    let body = {
      ParaAdvId: item.AdvertiseID,
    };
    setTimeout(
      () =>
        Linking.openURL(item.Advertise_url).catch(err =>
          alert('Somethng went wrong', err),
        ),
      400,
    );
    postApi(GLOBAL.CLICK_ADS, body, this.successAd, this.errorAd);
  };
  successAd = res => {
    this.setState({loading: false});
    if (res.data.status == 200) {
    } else {
      Utils.toast(res.data.message, 'warning');
    }
  };
  errorAd = error => {
    Utils.toast(error.message, 'danger');
  };

  render() {
    if (this.state.AdvertiseList.length <= 0) {
      return <View />;
    } else {
      return (
        <View style={{height: wp('15%'), width: wp('100%')}}>
          {this.state.AdvertiseList.length > 0 && (
            <SwiperView
              autoplay={true}
              showsPagination={false}
              autoplayTimeout={this.state.switchingTime}>
              {this.state.AdvertiseList.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.9}
                    onPress={() => this.onAdClick(item)}>
                    <Image
                      key={index}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                      }}
                      source={{uri: item.image_file}}
                    />
                  </TouchableOpacity>
                );
              })}
            </SwiperView>
          )}
        </View>
      );
    }
  }
}
