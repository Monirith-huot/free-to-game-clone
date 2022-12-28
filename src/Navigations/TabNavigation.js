import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LibraryScreen from '../Screens/LibraryScreen';
import {HomeIcon} from 'react-native-heroicons/solid';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import {CircleStackIcon} from 'react-native-heroicons/solid';
import {UserCircleIcon} from 'react-native-heroicons/solid';
import COLORS from '../contains/pallete';
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: [{backgroundColor: COLORS.primary}], //WHERE style your Tabbar here
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarIcon: ({color = 'red', size, focused}) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} />;
          } else if (route.name === 'Search') {
            return <MagnifyingGlassIcon color={color} />;
          } else if (route.name === 'Profile') {
            return <UserCircleIcon color={color} />;
          } else if (route.name === 'Library') {
            return <CircleStackIcon color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
