import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const RestaurantCard = ({ navigation, item }) => {
  // console.log('PROPS IN CARD', props);
  return (
    <TouchableOpacity
      style={styles.outLine}
      onPress={() => navigation.navigate('Details', item)}
    >
      <Text>{item.name}</Text>
      <Text>{item.location}</Text>
      <Text>{item.phone}</Text>
      <Text>Rating: {item.rating}</Text>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  outLine: {
    flex: 1,
    backgroundColor: '#089D8B',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: 43,
    marginBottom: 10,
  },
});
