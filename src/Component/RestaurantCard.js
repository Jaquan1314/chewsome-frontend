import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RestaurantCard = (props) => {
  const { image, location, name, phone, photos, rating, url } = props;

  return (
    <View style={styles.outLine}>
      <Text>{name}</Text>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  outLine: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
  },
});
