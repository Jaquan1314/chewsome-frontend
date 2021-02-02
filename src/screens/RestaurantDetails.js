import React, { useState } from 'react';
import * as Linking from 'expo-linking';
import Modal from 'react-native-modal';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { addToFavorite } from '../redux/actions/index';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { globalStyles } from '../../globalStyles';
import { TextInput } from 'react-native-gesture-handler';

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

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modal}
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
        >
          <View>
            <Formik
              initialValues={{ text: '' }}
              onSubmit={(values) =>
                console.log('Submitting my review:', values)
              }
            >
              {(formikProps) => (
                <View>
                  <TextInput
                    placeholder="content"
                    placeholderTextColor="white"
                  />
                </View>
              )}
            </Formik>
            <Text>Modal content</Text>
            {/* <TouchableOpacity onPress={toggleModal}>
              <Text>Close</Text>
            </TouchableOpacity> */}
          </View>
        </Modal>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: 'blue',
            padding: 7,
            marginLeft: 120,
            width: '35%',
          }}
          onPress={toggleModal}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            Add a review
          </Text>
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

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 350,
    marginTop: 300,
    marginLeft: 35,
  },
});
