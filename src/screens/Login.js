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
import { MaterialIcons } from '@expo/vector-icons';

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
            <View style={{ position: 'relative' }}>
              <MaterialIcons name="email" size={24} color="black" />
              <MaterialIcons name="lock" size={24} color="black" />
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

export default Login;
