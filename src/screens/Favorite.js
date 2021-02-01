import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Favorite = (props) => {
  console.log('INSIDE FAVORITE SCREEN', props);
  return (
    <View style={styles.container}>
      <Text>Favorite Component</Text>
    </View>
  );
};

export default Favorite;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
