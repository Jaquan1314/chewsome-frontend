import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const FavoriteCard = (props) => {
  console.log('INSIDE FAV CARD', props);
  const { id, restaurant, user } = props;
  return (
    <TouchableOpacity style={styles.card}>
      <Text>{restaurant.name}</Text>
      <Text>{restaurant.location}</Text>
      <Text>{restaurant.phone}</Text>
    </TouchableOpacity>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: 20,
    width: '60%',
  },
});
