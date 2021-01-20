import React from 'react';
import { View, Text } from 'react-native';

const RestaurantDetails = ({ route, navigation }) => {
  // console.log('REVIEW DETAILS');
  const {
    image_url,
    location,
    name,
    phone,
    photos,
    rating,
    url,
  } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{location}</Text>
    </View>
  );
};

export default RestaurantDetails;
