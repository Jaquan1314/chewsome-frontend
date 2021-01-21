import React from 'react';
import { View, Text, Image } from 'react-native';

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
      <Image
        style={{ width: '80%', height: 200 }}
        source={{ uri: image_url }}
      />
      <Text>{name}</Text>
      <Text>{location}</Text>
    </View>
  );
};

export default RestaurantDetails;
