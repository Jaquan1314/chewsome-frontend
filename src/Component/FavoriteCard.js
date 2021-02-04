import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Card, Button } from 'react-native-elements';

const FavoriteCard = (props) => {
  console.log('INSIDE FAV CARD', props);
  const { id, restaurant, user } = props;
  return (
    <Card key={id} containerStyle={{ width: '80%' }}>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: restaurant.image_url }} />
      <Text>{restaurant.location}</Text>
      <Text>{restaurant.phone}</Text>
      <Button title="Remove from favorite" />
    </Card>
    // <TouchableOpacity style={styles.card}>
    //   <Text>{restaurant.name}</Text>
    //   <Text>{restaurant.location}</Text>
    //   <Text>{restaurant.phone}</Text>
    // </TouchableOpacity>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
