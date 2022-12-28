import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen';
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();

function ScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="forgetPassowrd"
        component={ForgetPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ScreenNavigation;
