import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import { globalStyles } from '../../globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { signUp } from '../redux/actions/index';
import { connect } from 'react-redux';
import manWithChicken from '../../assets/man-with-chicken.jpg';

const SignUp = (props) => {
  return (
    <ScrollView style={globalStyles.appContainer}>
      <View stlye={globalStyles.container}>
        {/* SignUp Screen Image */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={manWithChicken} style={{ width: 350, height: 350 }} />
        </View>
        {/* SignUp Form */}
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values) => {
            props.signUp(values);
            props.navigation.navigate('Home');
          }}
        >
          {(formikProps) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {/* Username Input */}
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
                    style={globalStyles.userIcon}
                    name="account-box"
                    size={24}
                    color="#454B4A"
                  />
                }
                textContentType="username"
                placeholder="Username"
                placeholderTextColor="white"
                onChangeText={formikProps.handleChange('username')}
                onBlur={formikProps.handleBlur('username')}
                value={formikProps.values.username}
                selectionColor="#454B4A"
                autoCapitalize="none"
              />
              {/* Email Input */}
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
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={formikProps.handleChange('email')}
                onBlur={formikProps.handleBlur('email')}
                value={formikProps.values.email}
                selectionColor="#454B4A"
                autoCapitalize="none"
              />
              {/* Password Input */}
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
                    style={globalStyles.pwIcon}
                    name="lock"
                    size={24}
                    color="#454B4A"
                  />
                }
                secureTextEntry={true}
                textContentType="password"
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={formikProps.handleChange('password')}
                onBlur={formikProps.handleBlur('password')}
                value={formikProps.values.password}
                selectionColor="#454B4A"
                autoCapitalize="none"
              />
              {/* SignUp Button */}
              <TouchableOpacity
                style={{
                  ...globalStyles.signupButton,
                }}
                onPress={formikProps.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const mdp = (dispatch) => {
  return {
    signUp: (userObj) => dispatch(signUp(userObj)),
  };
};

export default connect(null, mdp)(SignUp);
