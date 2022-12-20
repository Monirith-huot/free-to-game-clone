import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

function ScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default ScreenNavigation;
