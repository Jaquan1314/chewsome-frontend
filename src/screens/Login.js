import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../../globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { logIn } from '../redux/actions/index';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  changeHandler = (e, name) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
    this.setState({
      username: '',
      password: '',
    });
    // console.log(this.props);
  };
  render() {
    return (
      <View style={globalStyles.appContainer}>
        <View stlye={globalStyles.container}>
          {/* initialValues of field( email, pw ) values in onSubmit represent the input from the user */}
          <TextInput
            style={{
              ...globalStyles.input,
              position: 'absolute',
              top: 220,
              width: '100%',
              backgroundColor: '#cccccc',
            }}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(e) => this.changeHandler(e, 'email')}
            value={this.state.email}
            selectionColor="#454B4A"
            name="email"
          />
          <TextInput
            style={{
              ...globalStyles.input,
              position: 'absolute',
              top: 280,
              width: '100%',
              backgroundColor: '#cccccc',
            }}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={(e) => this.changeHandler(e, 'password')}
            value={this.state.password}
            selectionColor="#454B4A"
            name="password"
          />
          <TouchableOpacity
            style={{
              ...globalStyles.signinButton,
              position: 'absolute',
              top: 340,
              width: '100%',
            }}
            onPress={this.submitHandler}
          >
            <Text style={globalStyles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(props.navigation.dispatch);
            }}
          >
            {(formikProps) => (
              <View style={{ position: 'relative' }}>
                <MaterialIcons
                  style={globalStyles.emailIcon}
                  name="email"
                  size={24}
                  color="#454B4A"
                />
                <MaterialIcons
                  style={globalStyles.pwIcon}
                  name="lock"
                  size={24}
                  color="#454B4A"
                />
                <TextInput
                  style={{
                    ...globalStyles.input,
                    position: 'absolute',
                    top: 220,
                    width: '100%',
                    backgroundColor: '#cccccc',
                  }}
                  placeholder="Email"
                  placeholderTextColor="white"
                  onChangeText={formikProps.handleChange('email')}
                  value={formikProps.values.email}
                  selectionColor="#454B4A"
                />

                <TextInput
                  style={{
                    ...globalStyles.input,
                    position: 'absolute',
                    top: 280,
                    width: '100%',
                    backgroundColor: '#cccccc',
                  }}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onChangeText={formikProps.handleChange('password')}
                  value={formikProps.values.password}
                  selectionColor="#454B4A"
                />
                <TouchableOpacity
                  style={{
                    ...globalStyles.signinButton,
                    position: 'absolute',
                    top: 340,
                    width: '100%',
                  }}
                  onPress={formikProps.handleSubmit}
                >
                  <Text style={globalStyles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik> */}
        </View>
      </View>
    );
  }
}

const mdp = (dispatch) => {
  return {
    logIn: (userObj) => dispatch(logIn(userObj)),
  };
};

export default connect(null, mdp)(Login);
