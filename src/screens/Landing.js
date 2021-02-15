import React from 'react';
import { globalStyles } from '../../globalStyles';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import signInWithGoogleAsync from '../redux/actions/index';
import hotDogSoda from '../../assets/hot-dog-soda.jpg';

const signInWithGoogle = () => {
  signInWithGoogleAsync();
};

const Landing = ({ navigation }) => {
  return (
    <View style={globalStyles.appContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* chewsome application title */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 40,
              // position: 'absolute',
              fontWeight: '300',
              // bottom: 110,
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
          <TouchableOpacity
            style={globalStyles.signupButton}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text style={globalStyles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.googleSigninButton}
            onPress={() => {
              signInWithGoogle();
              // console.log('Getting clicked!');
            }}
          >
            <Text style={globalStyles.buttonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Landing;
