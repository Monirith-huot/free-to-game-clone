import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import COLORS from '../contains/pallete';
import GStyle from './../../Style';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[GStyle.screenStyle, {justifyContent: 'center'}]}>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <Image
            source={require('./../assets/image/logo.png')}
            style={{height: 100, width: 100, marginBottom: 50}}
          />
          <Text
            style={[
              GStyle.headerStyle,
              {fontWeight: 'bold', marginBottom: 20},
            ]}>
            Log in to FreeToGame
          </Text>

          <TextInput
            style={GStyle.inputStyle}
            placeholder="Username & email"
            placeholderTextColor={COLORS.white}
          />

          <TextInput
            style={GStyle.inputStyle}
            placeholder="Password"
            placeholderTextColor={COLORS.white}
          />

          <TouchableOpacity style={GStyle.buttonStyle}>
            <Text style={GStyle.buttonStyleText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center'}}>
            <Text style={GStyle.TextButtonStyle}>Forgot Password</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', opacity: 0.8}}>
              Not a members yet?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}>
              <Text style={GStyle.TextButtonStyle}>Create Account {'>'} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 12,
  //   justifyContent: 'center',
  //   backgroundColor: COLORS.background,
  // },
});

export default LoginScreen;

// <View
//   style={{
//     flex: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: COLORS.background,
//   }}>
//   <Text>Log in to FreeToGame</Text>
// </View>
