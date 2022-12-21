import {StyleSheet} from 'react-native';
import COLORS from './src/contains/pallete';

module.exports = StyleSheet.create({
  screenStyle: {
    flex: 12,
    backgroundColor: COLORS.background,
  },
  headerStyle: {
    fontSize: 25,
    color: COLORS.white,
    opacity: 0.5,
    alignContent: 'center',
  },
  inputStyle: {
    backgroundColor: COLORS.primary,
    height: 60,
    padding: 20,
    borderRadius: 10,
    color: COLORS.white,
    opacity: 0.5,
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: '#3a3f44',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    // width: 20,
  },
  buttonStyleText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  TextButtonStyle: {
    color: COLORS.blue,
    marginBottom: 15,
  },
  textStyle: {
    color: '#fff',
    opacity: 0.8,
  },
});
