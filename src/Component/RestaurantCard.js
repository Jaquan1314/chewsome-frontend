import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const RestaurantCard = ({ item, navigation }) => {
  console.log('PROPS IN CARD');
  return (
    <TouchableOpacity
      style={styles.outLine}
      onPress={() => navigation.navigate('Details', item)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  outLine: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 20,
  },
});
