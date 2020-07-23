import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import LocalStorage from '../../../common/LocalStorage';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            LocalStorage.save('isLogin', false);
            this.props.navigation.navigate('Login');
          }}>
          <Text>Home - Go back</Text>
        </Button>
        <Button
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}>
          <Text>Open Drawer</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFBFB',
  },
});
