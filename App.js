import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './src/Navigations/ScreenNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/rootStore';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <ScreenNavigation />
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
