import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SparklesIcon} from 'react-native-heroicons/solid';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#253237', flex: 1}}>
        <SparklesIcon />
        <Text> SplashScreen </Text>
      </View>
    );
  }
}

export default SplashScreen;
