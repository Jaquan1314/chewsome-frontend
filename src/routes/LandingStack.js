import React from 'react';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export const LandingStack = () => (
  <Navigator initialRouteName="Landing" headerMode="screen">
    <Screen
      name="Welcome"
      component={Landing}
      options={{ header: () => null }}
    />
    <Screen name="Login" component={Login} options={{ title: 'Login' }} />
    <Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
    <Screen name="Home" component={MainTabNavigator} />
  </Navigator>
);

export default LandingStack;
