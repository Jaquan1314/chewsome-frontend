import React from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Text } from 'react-native';

const RestaurantCard = ({ item }) => {
  console.log('PROPS IN CARD', item);
  return (
    <View style={styles.outLine}>
      <Text>{item.name}</Text>
    </View>
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
