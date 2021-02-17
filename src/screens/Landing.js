import React, { useState } from 'react';
import { globalStyles } from '../../globalStyles';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { signInWithGoogleAsync } from '../redux/actions/index';
import hotDogSoda from '../../assets/hot-dog-soda.jpg';
import { BackHandler } from 'react-native';

const signInWithGoogle = () => {
  signInWithGoogleAsync();
};

const Landing = ({ navigation }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={globalStyles.appContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* chewsome application title */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 45,
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            chew
            <Text style={{ fontWeight: '700', color: '#089D8B' }}>some.</Text>
          </Text>
        </View>
        {/* Image */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={hotDogSoda}
            style={{
              width: 400,
              height: 400,
            }}
          />
        </View>
        {/* Login/Signup buttons */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={globalStyles.signinButton}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={globalStyles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* SignUp Btn */}
          <TouchableOpacity
            style={globalStyles.signupButton}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text style={globalStyles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          {/* Google Btn */}
          {disabled ? (
            <TouchableOpacity
              disabled={disabled}
              style={{
                ...globalStyles.googleSigninButton,
                backgroundColor: 'grey',
              }}
            >
              <Text style={globalStyles.buttonText}>Disabled</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                signInWithGoogle();
                // console.log('Getting clicked!');
              }}
              style={globalStyles.googleSigninButton}
            >
              <Text style={globalStyles.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Landing;
