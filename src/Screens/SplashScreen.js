import React, {Component} from 'react';
import {View, Text} from 'react-native';


class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#253237', flex: 1}}>
        <Text> SplashScreen </Text>
      </View>
    );
  }
}

export default SplashScreen;
