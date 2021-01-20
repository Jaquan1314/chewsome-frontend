import React, { useEffect, useState } from 'react';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import RestaurantDetails from '../screens/RestaurantDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/index';

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export const LandingStack = (props) => {
  useEffect(() => {
    console.log('Console log in Landing Stack', props);
    props.logIn(undefined);
  }, []);

  return (
    <Navigator initialRouteName="Landing" headerMode="screen">
      <Screen
        name="Welcome"
        component={Landing}
        options={{ header: () => null }}
      />
      <Screen name="Login" component={Login} options={{ title: 'Login' }} />
      <Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
      <Screen
        name="Home"
        component={MainTabNavigator}
        options={{ headerLeft: null }}
      />
      <Screen name="Details" component={RestaurantDetails} />
    </Navigator>
  );
};

const msp = (state) => {
  return {
    user: state.user,
  };
};

const mdp = (dispatch) => {
  return {
    logIn: (userObj) => dispatch(logIn(userObj)),
  };
};

export default connect(msp, mdp)(LandingStack);
