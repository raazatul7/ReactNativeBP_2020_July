import React, {Component} from 'react';
import {withNavigation} from 'react-navigation';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {bg_clr} from '../../common/Colors';

class CustomHeader extends Component {
  render() {
    return (
      <Header
        style={{backgroundColor: bg_clr, borderBottomWidth: 0, elevation: 0}}>
        <Left style={{flex: 1}}>
          <Button
            transparent
            onPress={this.props.onLeftPress}
            style={{width: wp('15%')}}>
            <Icon name={this.props.icon} style={{color: 'white', left: 5}} />
          </Button>
        </Left>
      </Header>
    );
  }
}
export default withNavigation(CustomHeader);
