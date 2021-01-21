import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const RestaurantCard = ({ item, navigation }) => {
  // console.log('PROPS IN CARD');
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
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 10,
  },
});
