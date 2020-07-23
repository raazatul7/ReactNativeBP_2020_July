import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Business extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Business</Text>
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
