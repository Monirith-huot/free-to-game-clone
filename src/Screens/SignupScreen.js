import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import COLORS from '../contains/pallete';
import GStyle from './../../Style';

class SignupScreen extends Component {
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
            Create My Account!
          </Text>

          <TextInput
            style={GStyle.inputStyle}
            placeholder="Username"
            placeholderTextColor={COLORS.white}
          />

          <TextInput
            style={GStyle.inputStyle}
            placeholder="Email Address"
            placeholderTextColor={COLORS.white}
          />

          <TextInput
            style={GStyle.inputStyle}
            placeholder="Password"
            placeholderTextColor={COLORS.white}
          />
          <TextInput
            style={GStyle.inputStyle}
            placeholder="Confirm Passowrd"
            placeholderTextColor={COLORS.white}
          />

          <TouchableOpacity style={GStyle.buttonStyle}>
            <Text style={GStyle.buttonStyleText}>Create Account</Text>
          </TouchableOpacity>
          <Text
            style={[
              GStyle.textStyle,
              {opacity: 0.4, textAlign: 'center', marginBottom: 20},
            ]}>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={GStyle.textStyle}>Already a member? </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('login');
              }}>
              <Text style={GStyle.TextButtonStyle}>Login {'>'} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignupScreen;
