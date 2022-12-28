import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import GStyle from './../../Style';
import COLORS from '../contains/pallete';
import GameAction from '../Redux/getGameRedux';
import {connect} from 'react-redux';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.props.getGameData();
  // }

  render() {
    var date = new Date();
    var hours = date.getHours();

    let message;

    let colorStyle = {
      color: 'green',
    };

    if (hours < 12) {
      colorStyle.color = 'red';
      message = 'Good Morning';
    } else if (hours < 18) {
      colorStyle.color = 'green';
      message = 'Good Afternoon';
    } else {
      colorStyle.color = 'blue';
      message = 'Good Evening';
    }
    return (
      <SafeAreaView style={[GStyle.screenStyle]}>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <Text>
            <Text
              style={[GStyle.headerStyle, {fontWeight: 'bold', opacity: 0.7}]}>
              {message}{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: '#fff',
                opacity: 0.7,
              }}>
              Gamer
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     data: state.game.data,
//   };
// }

// // call action from actions
// const mapDispatchToProps = dispatch => ({
//   getGameData: () => dispatch(GameAction.userDataRequest()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default HomeScreen;
