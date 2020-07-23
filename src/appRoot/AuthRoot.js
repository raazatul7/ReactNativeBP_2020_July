import {createStackNavigator} from 'react-navigation-stack';

import Login from '../container/screen/auth/Login';
import ForgotPassword from '../container/screen/auth/ForgotPassword';
import ResetPassword from '../container/screen/auth/ResetPassword';
import OTP from '../container/screen/auth/OTP';

export default AuthRoot = () => {
  return createStackNavigator(
    {
      Login: {screen: Login},
      ForgotPassword: {screen: ForgotPassword},
      OTP: {screen: OTP},
      ResetPassword: {screen: ResetPassword},
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
      defaultNavigationOptions: {
        gestureEnabled: false,
      },
    },
  );
};
