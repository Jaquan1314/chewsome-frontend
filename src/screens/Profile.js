import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../globalStyles';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/index';

const Profile = (props) => {
  // console.log('PROFILE PROPS', props);
  return (
    <View style={globalStyles.container}>
      <Text>Username: {props.user.username}</Text>
      <Text>Email: {props.user.email}</Text>
      <TouchableOpacity
        style={globalStyles.logOutButton}
        onPress={() => {
          props.navigation.navigate('Welcome');
          props.logOut();
          // console.log('USER LOGGED OUT', props.user);
        }}
      >
        <Text style={globalStyles.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const msp = (state) => {
  return {
    user: state.user,
  };
};

const mdp = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(msp, mdp)(Profile);
