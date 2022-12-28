import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import GStyle from './../../Style';
import COLORS from '../contains/pallete';
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Hello world</Text>
      </View>
      //   <View>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: COLORS.background,
      //         flexDirection: 'column',
      //       }}>
      //       <StatusBar
      //         barStyle="dark-content"
      //         backgroundColor="transparent"
      //         translucent
      //       />
      //       <ImageBackground
      //         style={{width: '100%', aspectRatio: 1.6}}
      //         resizeMode="cover"
      //         source={{
      //           uri: 'https://images.unsplash.com/photo-1539716947714-3295e1074d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      //         }}>
      //         <View
      //           style={{
      //             position: 'absolute',
      //             bottom: -50,
      //             height: 100,
      //             width: 100,
      //             borderRadius: 50,
      //             overflow: 'hidden',
      //             // alignSelf: 'center',
      //             borderWidth: 3,
      //             borderColor: '#aaa',
      //           }}>
      //           <Image
      //             source={{
      //               uri: 'https://images.unsplash.com/photo-1559969143-b2defc6419fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80',
      //             }}
      //             style={{height: 100, width: 100}}
      //           />
      //         </View>
      //       </ImageBackground>
      //     </View>
      //   </View>
    );
  }
}

//
export default ProfileScreen;
