import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './src/Navigations/ScreenNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <ScreenNavigation />
      </NavigationContainer>
    );
  }
}

export default App;
