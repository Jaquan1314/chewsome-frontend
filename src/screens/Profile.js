import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { globalStyles } from '../../globalStyles';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/index';

const Profile = (props) => {
  // console.log('PROFILE PROPS', props);

  const logOut = () => {
    props.logOut();
    props.navigation.navigate('Welcome');
  };
  console.log(props.user);

  return (
    <View style={globalStyles.container}>
      <Avatar
        rounded
        size="large"
        icon={{ name: 'user', type: 'font-awesome', color: 'white' }}
        overlayContainerStyle={{ backgroundColor: '#A8A8A8' }}
        containerStyle={{ marginBottom: 12 }}
        activeOpacity={0.7}
      />
      <Text>Username: {props.user.username}</Text>
      <Text>Email: {props.user.email}</Text>
      <TouchableOpacity
        style={{ ...globalStyles.logOutButton, marginTop: 12 }}
        onPress={logOut}
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
