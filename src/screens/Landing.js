import React, { useState, useEffect } from 'react';
import { globalStyles } from '../../globalStyles';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import axios from 'axios';

const Landing = () => {
  // const url ;
  // useEffect(() => {
  //   axios.get(url).then((resp) => console.log(resp.data));
  // }, []);

  return (
    <View style={globalStyles.appContainer}>
      <View style={globalStyles.circleCont}>
        <View style={globalStyles.turquoiseCircle} opacity={0.3} />
        <View style={globalStyles.turqCircle} opacity={0.2} />
        <View style={globalStyles.smallCircle} opacity={0.2} />
      </View>
      <View style={{ ...globalStyles.container, position: 'relative' }}>
        <Text
          style={{
            fontSize: 36,
            position: 'absolute',
            fontWeight: '300',
            bottom: 510,
            textAlign: 'center',
          }}
        >
          chew
          <Text style={{ fontWeight: '700', color: '#089D8B' }}>some.</Text>
        </Text>
        <TouchableOpacity style={globalStyles.signinButton}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.signupButton}>
          <Text style={globalStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
