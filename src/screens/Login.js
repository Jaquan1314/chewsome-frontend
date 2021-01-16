import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../../globalStyles';

const Login = () => {
  return (
    <View style={globalStyles.appContainer}>
      <View stlye={globalStyles.container}>
        {/* initialValues of field( email, pw ) values in onSubmit represent the input from the user */}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formikProps) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="email"
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="password"
                onChangeText={formikProps.handleChange('password')}
                value={formikProps.values.password}
              />
              <TouchableOpacity
                style={globalStyles.signinButton}
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

export default Login;
