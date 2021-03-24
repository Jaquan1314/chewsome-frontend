import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import RestaurantDetails from '../screens/RestaurantDetails';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/index';
import { MaterialIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const MainTabNavigator = () => (
  <Tab.Navigator
    activeColor="#089D8B"
    barStyle={{ backgroundColor: 'white' }}
    labeled={false}
    shifting
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" size={29} color={color} />
        ),
        tabBarColor: 'white',
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorite}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="favorite" size={27} color={color} />
        ),
        tabBarColor: 'lightblue',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="person" size={30} color={color} />
        ),
        tabBarColor: '#454B4A',
      }}
    />
  </Tab.Navigator>
);

export const LandingStack = (props) => {
  const { logIn } = props;

  useEffect(() => {
    // console.log('Console log in Landing Stack', props);
    logIn(undefined);
  }, []);

  return (
    <Navigator initialRouteName="Landing" headerMode="screen">
      <Screen
        name="Welcome"
        component={Landing}
        options={{ header: () => null, cardStyle: { backgroundColor: '#fff' } }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{ title: 'Login', cardStyle: { backgroundColor: '#fff' } }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Sign Up', cardStyle: { backgroundColor: '#fff' } }}
      />
      <Screen
        name="Home"
        component={MainTabNavigator}
        options={{
          title: (
            <Text style={{ fontSize: 27, fontWeight: '500' }}>
              chew
              <Text style={{ fontWeight: '700', color: '#089D8B' }}>some.</Text>
            </Text>
          ),
          headerLeft: null,
          cardStyle: { backgroundColor: '#fff' },
        }}
      />
      <Screen
        name="Details"
        component={RestaurantDetails}
        options={{ cardStyle: { backgroundColor: '#fff' } }}
      />
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
