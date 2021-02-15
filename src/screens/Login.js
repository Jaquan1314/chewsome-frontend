import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import { globalStyles } from '../../globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { logIn } from '../redux/actions/index';
import { connect } from 'react-redux';
import groupJunkFood from '../../assets/group-junk-food.jpg';

const Login = (props) => {
  return (
    <View style={globalStyles.appContainer}>
      <View stlye={globalStyles.container}>
        {/* Login Screen Image */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={groupJunkFood} style={{ width: 350, height: 350 }} />
        </View>
        {/* Login Form */}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            props.logIn(values);
            props.navigation.navigate('Home');
          }}
        >
          {(formikProps) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Input
                inputContainerStyle={{
                  ...globalStyles.input,
                  borderBottomWidth: 0,
                  backgroundColor: '#cccccc',
                }}
                inputStyle={{
                  textAlign: 'center',
                }}
                leftIcon={
                  <MaterialIcons
                    style={globalStyles.emailIcon}
                    name="email"
                    size={24}
                    color="#454B4A"
                  />
                }
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={formikProps.handleChange('email')}
                onBlur={formikProps.handleBlur('email')}
                value={formikProps.values.email}
                selectionColor="#454B4A"
                autoCapitalize="none"
              />

              <Input
                inputStyle={{
                  textAlign: 'center',
                }}
                inputContainerStyle={{
                  ...globalStyles.input,
                  borderBottomWidth: 0,
                  backgroundColor: '#cccccc',
                }}
                leftIcon={
                  <MaterialIcons
                    style={globalStyles.pwIcon}
                    name="lock"
                    size={24}
                    color="#454B4A"
                  />
                }
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
