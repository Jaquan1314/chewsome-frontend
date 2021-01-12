import React, { useState, useEffect } from 'react';
import { globalStyles } from '../../globalStyles';
import { Text, View } from 'react-native';
import axios from 'axios';

const Home = () => {
  const url = 'http://localhost:3000/books';
  useEffect(() => {
    axios.get(url).then((resp) => console.log(resp.data));
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 40 }}>
        Testing Testing. I want McChicken!!❤️💪🏽
      </Text>
    </View>
  );
};

export default Home;
