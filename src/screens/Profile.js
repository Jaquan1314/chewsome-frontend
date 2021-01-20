import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../globalStyles';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/index';

const Profile = (props) => {
  return (
    <View style={globalStyles.container}>
      <Text>Username</Text>
      <Text>Email</Text>
      <TouchableOpacity
        style={globalStyles.logOutButton}
        onPress={() => {
          props.logOut();
          props.navigation.navigate('Welcome');
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
