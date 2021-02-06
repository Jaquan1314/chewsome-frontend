import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const FavoriteCard = ({ favoriteObj }) => {
  console.log('INSIDE FAV CARD', favoriteObj);
  const { id, restaurant, user } = favoriteObj;
  return (
    <Card containerStyle={{ width: '80%' }}>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: restaurant.image_url }} />
      <Text>{restaurant.location}</Text>
      <Text>{restaurant.phone}</Text>
      <Button
        title="Remove from favorite"
        onPress={() => console.log("You're clicking me senpai")}
      />
    </Card>
  );
};

export default FavoriteCard;
