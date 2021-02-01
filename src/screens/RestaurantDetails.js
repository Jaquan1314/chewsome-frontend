import React from 'react';
import * as Linking from 'expo-linking';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { addToFavorite } from '../redux/actions/index';
import { connect } from 'react-redux';
import { globalStyles } from '../../globalStyles';

const RestaurantDetails = ({ route, navigation, user, addToFavorite }) => {
  console.log('REVIEW DETAILS', route);
  const {
    id,
    image_url,
    location,
    name,
    phone,
    photos,
    rating,
    url,
    reviews,
  } = route.params;
  const allReviews = reviews.map((review) => (
    <Text>
      {review.text} - {review.user.username}
    </Text>
  ));
  const handleLinking = () => {
    Linking.openURL(url);
  };

  const arrayOfFavorites = user.favorites;
  console.log(arrayOfFavorites[0]);

  return (
    <View>
      <View>
        <Image
          style={{ width: '100%', height: 400 }}
          source={{ uri: image_url }}
        />
        <Text>{name}</Text>
        <Text>{location}</Text>
        <TouchableOpacity onPress={handleLinking}>
          <Text style={{ color: 'blue' }}>View more</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.favButton}
          onPress={() => {
            const userId = user.id;
            const restaurantId = id;
            addToFavorite(userId, restaurantId);
            // navigation.navigate('Favorite')
            // window.alert('added to favorites');
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            Add to Favorites
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 10 }}>
          Reviews
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '70%',
            marginTop: 10,
            marginLeft: 70,
            marginRight: 40,
            marginBottom: 20,
          }}
        />
        <Text style={{ textAlign: 'center' }}>{allReviews}</Text>
        <TouchableOpacity style={{ justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>Add a review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const msp = (state) => {
  return {
    favorites: state.favorites,
    user: state.user,
  };
};

const mdp = (dispatch) => {
  return {
    addToFavorite: (userId, restaurantId) =>
      dispatch(addToFavorite(userId, restaurantId)),
  };
};

export default connect(msp, mdp)(RestaurantDetails);
