import React, {Component} from 'react';
import {createRootNavigator} from './appRoot/Router';
import {createAppContainer} from 'react-navigation';
import LocalStorage from './common/LocalStorage';
import {Root} from 'native-base'; // used for Toast
import {Provider} from 'react-redux';
import configureStore from './redux/store/store';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isCheckLogin: false,
    };
  }

  componentDidMount = async () => {
    let isLogin = await LocalStorage.read('isLogin');
    this.setState({isLogin: isLogin, isCheckLogin: true});
  };

  render() {
    const {isLogin, isCheckLogin} = this.state;
    const AppStackContainer = createAppContainer(createRootNavigator(isLogin));
    if (!isCheckLogin) {
      return null;
    } else {
      return (
        <Provider store={store}>
          <Root>
            <AppStackContainer />
          </Root>
        </Provider>
      );
    }
  }
}
export default App;
