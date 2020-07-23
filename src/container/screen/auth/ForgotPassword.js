import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.goBack()}>
          <Text>ForgotPassword</Text>
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
  },
});
