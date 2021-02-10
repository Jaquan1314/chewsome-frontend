import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Rating, ListItem } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deleteReview } from '../redux/actions/index';

const ReviewCard = (props) => {
  // console.log('REVIEWCARD PROPS', props);
  const { review, deleteReview, user } = props;
  return (
    <ListItem bottomDivider>
      <Text>
        {review.text} - {review.user.username}
        {'   '}
        <Rating imageSize={13} readonly startingValue={review.rating} />
      </Text>
      {user.id === review.user.id ? (
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}
        >
          <TouchableOpacity
            onPress={() => {
              deleteReview(review.id);
            }}
          >
            <MaterialIcons name="delete" />
          </TouchableOpacity>
        </View>
      ) : null}
    </ListItem>
  );
};

const msp = (state) => {
  return {
    user: state.user,
  };
};

const mdp = (dispatch) => {
  return {
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};

export default connect(msp, mdp)(ReviewCard);
