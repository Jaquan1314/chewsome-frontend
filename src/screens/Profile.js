import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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
      {/* User Avatar */}
      <Avatar
        rounded
        size="large"
        icon={{ name: 'user', type: 'font-awesome', color: 'white' }}
        overlayContainerStyle={{ backgroundColor: '#A8A8A8' }}
        containerStyle={{ marginBottom: 12 }}
        activeOpacity={0.7}
      />
      {/* Username */}
      <TouchableWithoutFeedback
        onPress={() => console.log('Why are you trying to edit me!')}
      >
        <Text style={{ fontSize: 20 }}>Username: {props.user.username}</Text>
      </TouchableWithoutFeedback>
      {/* Email */}
      <Text style={{ fontSize: 20 }}>Email: {props.user.email}</Text>
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
