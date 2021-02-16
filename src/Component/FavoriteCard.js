import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { deleteFavorite } from '../redux/actions/index';
import { connect } from 'react-redux';

const FavoriteCard = ({ favoriteObj, deleteFavorite }) => {
  console.log('INSIDE FAV CARD', favoriteObj);
  const { id, restaurant, user } = favoriteObj;
  return (
    <Card containerStyle={{ width: 184, borderWidth: 0 }}>
      <Card.Title style={{ fontSize: 16 }}>{restaurant.name}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: restaurant.image_url }} />
      <Text style={{ fontSize: 16, marginTop: 10 }}>{restaurant.location}</Text>
      <Text style={{ fontSize: 16, marginTop: 2 }}>{restaurant.phone}</Text>
      <Button
        title="Remove"
        style={{ marginTop: 8 }}
        onPress={() => {
          deleteFavorite(id);
        }}
      />
    </Card>
  );
};

const mdp = (dispatch) => {
  return {
    deleteFavorite: (favId) => dispatch(deleteFavorite(favId)),
  };
};

export default connect(null, mdp)(FavoriteCard);
