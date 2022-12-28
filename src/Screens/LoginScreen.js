import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import COLORS from '../contains/pallete';
import GStyle from './../../Style';
import UserAction from '../Redux/getUserRedux';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    this.setState({email: '', password: ''});
  };

  users = [
    {
      email: 'admin',
      password: 'admin',
    },
  ];

  authenticated() {
    let email = this.state.email;
    let password = this.state.password;
    let existsUser = this.users.find(
      x => x.email === email && x.password === password,
    );
    if (existsUser) {
      this.props.navigation.replace('Home');
    } else {
      this.toggleModal();
    }
  }
  componentDidMount() {
    this.props.getUserData();
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
            placeholder="Email"
            placeholderTextColor={COLORS.white}
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
            autoCapitalize="none"
          />

          <TextInput
            style={GStyle.inputStyle}
            placeholder="Password"
            placeholderTextColor={COLORS.white}
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={GStyle.buttonStyle}
            onPress={() => this.authenticated()}>
            <Text style={GStyle.buttonStyleText}>Login</Text>
          </TouchableOpacity>

          <Modal
            animationIn={'bounceIn'}
            animationOut={'bounceOut'}
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.toggleModal()}>
            <View
              style={{
                backgroundColor: COLORS.background,
                padding: 30,
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                }}>
                Please try again
              </Text>
              <Text style={{textAlign: 'center', color: '#fff'}}>
                The Email and Password you entered did not match our records.
                Please double check and try again.
              </Text>

              <TouchableOpacity
                onPress={() => this.toggleModal()}
                style={{marginTop: 20}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.blue,
                    fontWeight: 'bold',
                  }}>
                  Try again
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

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
