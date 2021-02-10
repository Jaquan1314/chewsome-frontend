import React, { useState, useEffect } from 'react';
import * as Linking from 'expo-linking';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  addToFavorite,
  addReview,
  getRestaurantReviews,
} from '../redux/actions/index';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../globalStyles';

const RestaurantDetails = (props) => {
  // console.log('DETAIL PROPS', props);
  const {
    route,
    navigation,
    user,
    reviews,
    addToFavorite,
    getRestaurantReviews,
    addReview,
  } = props;
  // console.log('REVIEW DETAILS', route);
  // console.log('REVIEWS FROM REDUX:', reviews);
  const {
    id,
    image_url,
    location,
    name,
    phone,
    photos,
    rating,
    url,
  } = route.params;

  const userId = user.id;
  const restaurantId = id;
  // console.log('RESTAURANT ID:', restaurantId);

  useEffect(() => {
    getRestaurantReviews(restaurantId);
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const allReviews = reviews.map((review) => (
    <>
      <Text>
        {review.text} - {review.user.username}
      </Text>
      {'\n'}
    </>
  ));

  const handleLinking = () => {
    Linking.openURL(url);
  };

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
          onPress={() => {
            addToFavorite(userId, restaurantId);
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'left',
            }}
          >
            <MaterialIcons name="favorite" size={24} color="red" />
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
          animationIn="zoomInUp"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
        >
          <View>
            <Formik
              initialValues={{ text: '', rating: '' }}
              onSubmit={(values, actions) => {
                const { rating, text } = values;
                actions.resetForm();
                addReview(userId, restaurantId, rating, text);
                // console.log('Submitting my review:', values);
              }}
            >
              {(formikProps) => (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  {/* Content */}
                  <TextInput
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      width: 200,
                      // backgroundColor: '#cccccc',
                    }}
                    multiline
                    placeholder="content"
                    placeholderTextColor="black"
                    value={formikProps.values.text}
                    onChangeText={formikProps.handleChange('text')}
                  />

                  {/* Rating */}
                  <TextInput
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      width: '100%',
                      marginTop: 20,
                      // backgroundColor: '#cccccc',
                    }}
                    keyboardType="numeric"
                    placeholder="rating"
                    placeholderTextColor="black"
                    value={formikProps.values.rating}
                    onChangeText={formikProps.handleChange('rating')}
                  />

                  <TouchableOpacity
                    style={{
                      ...globalStyles.signinButton,
                      position: 'absolute',
                      top: 110,
                      width: 180,
                    }}
                    onPress={formikProps.handleSubmit}
                  >
                    <Text style={globalStyles.buttonText}>Submit Review</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
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
    user: state.user,
    reviews: state.reviews,
  };
};

const mdp = (dispatch) => {
  return {
    addToFavorite: (userId, restaurantId) =>
      dispatch(addToFavorite(userId, restaurantId)),
    getRestaurantReviews: (restaurantId) =>
      dispatch(getRestaurantReviews(restaurantId)),
    addReview: (userId, restaurantId, rating, text) =>
      dispatch(addReview(userId, restaurantId, rating, text)),
  };
};

export default connect(msp, mdp)(RestaurantDetails);

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    height: 300,
    width: 350,
    marginTop: 300,
    marginLeft: 35,
  },
});
