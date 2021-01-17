import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Component</Text>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
