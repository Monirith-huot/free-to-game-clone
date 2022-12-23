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
import UserAction from '../Redux/getUserRedux';
import {connect} from 'react-redux';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.getUserData();
  }
  render() {
    //TODO: check validation for user and password
    //TODO valide their input with our api data
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
            onChangeText={text => this.setState({userName: text})}
            value={this.state.userName}
          />

          <TextInput
            style={GStyle.inputStyle}
            placeholder="Password"
            placeholderTextColor={COLORS.white}
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
          />

          <TouchableOpacity
            style={GStyle.buttonStyle}
            // onPress={() =>
            //   console.log(this.state.userName, this.state.password)
            // }
          >
            <Text style={GStyle.buttonStyleText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => this.props.navigation.navigate('forgetPassowrd')}>
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

function mapStateToProps(state) {
  return {
    data: state.user.data,
  };
}

// call action from actions
const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(UserAction.userDataRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
