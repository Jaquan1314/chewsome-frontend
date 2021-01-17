import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../../globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { logIn } from '../redux/actions/index';
import { connect } from 'react-redux';

const Login = (props) => {
  return (
    <View style={globalStyles.appContainer}>
      <View stlye={globalStyles.container}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            props.logIn(values);
            props.navigation.navigate('Home');
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
                onBlur={formikProps.handleBlur('email')}
                value={formikProps.values.email}
                selectionColor="#454B4A"
                autoCapitalize="none"
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
                onBlur={formikProps.handleBlur('password')}
                value={formikProps.values.password}
                selectionColor="#454B4A"
                autoCapitalize="none"
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
        </Formik>
      </View>
    </View>
  );
};

const mdp = (dispatch) => {
  return {
    logIn: (userObj) => dispatch(logIn(userObj)),
  };
};

export default connect(null, mdp)(Login);
