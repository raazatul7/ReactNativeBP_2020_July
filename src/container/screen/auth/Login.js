import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {connect} from 'react-redux';
import {fetchProduct} from '../../../redux/actions/productAction';
import {Button} from 'native-base';
import LocalStorage from '../../../common/LocalStorage';
import fontFam from '../../../common/Fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            LocalStorage.save('isLogin', true);
            this.props.navigation.navigate('Home');
          }}>
          <Text>Login</Text>
        </Button>
        <Text style={{fontFamily: fontFam.extra_bold}}>
          A quick brown fox jumped over the top.
        </Text>
        <FontAwesome name="glass" />
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

const mapStateToProps = (state) => {
  return {
    // productData: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getProduct: () => {
    //   dispatch(fetchProduct());
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
