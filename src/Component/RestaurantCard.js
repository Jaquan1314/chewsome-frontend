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
      <Text>{item.location.address1}</Text>
      <Text>{item.display_phone}</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>Reviews: {item.review_count}</Text>
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
