import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../../globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { signUp } from '../redux/actions/index';
import { connect } from 'react-redux';

const SignUp = () => {
  return (
    <View style={globalStyles.appContainer}>
      <View stlye={globalStyles.container}>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values) => {
            props.signUp(values);
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
                  top: 210,
                  width: '100%',
                  backgroundColor: '#cccccc',
                }}
                placeholder="Username"
                placeholderTextColor="white"
                onChangeText={formikProps.handleChange('username')}
                onBlur={formikProps.handleBlur('username')}
                value={formikProps.values.email}
                selectionColor="#454B4A"
                autoCapitalize="none"
              />

              <TextInput
                style={{
                  ...globalStyles.input,
                  position: 'absolute',
                  top: 270,
                  width: '100%',
                  backgroundColor: '#cccccc',
                }}
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={formikProps.handleChange('email')}
                onBlur={formikProps.handleBlur('email')}
                value={formikProps.values.email}
                selectionColor="#454B4A"
                autoCapitalize="none"
              />

              <TextInput
                style={{
                  ...globalStyles.input,
                  position: 'absolute',
                  top: 330,
                  width: '100%',
                  backgroundColor: '#cccccc',
                }}
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={formikProps.handleChange('password')}
                onBlur={formikProps.handleBlur('password')}
                value={formikProps.values.password}
                selectionColor="#454B4A"
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={{
                  ...globalStyles.signupButton,
                  position: 'absolute',
                  top: 390,
                  width: '100%',
                }}
                onPress={formikProps.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const mdp = (dispatch) => {
  return {
    signUp: (userObj) => dispatch(signUp(userObj)),
  };
};

export default connect(null, mdp)(SignUp);
