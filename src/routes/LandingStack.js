import React from 'react';
import Login from '../screens/Login';
import Landing from '../screens/Landing';
import SignUp from '../screens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export const LandingStack = () => (
  <Navigator initialRouteName="Landing" headerMode="screen">
    <Screen
      name="Welcome"
      component={Landing}
      options={{ header: () => null }}
    />
    <Screen name="Login" component={Login} options={{ title: 'Login' }} />
    <Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
  </Navigator>
);

export default LandingStack;
