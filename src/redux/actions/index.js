import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  GET_RESTAURANTS,
  ADD_TO_FAVORITE,
  DELETE_FAVORITE,
  ADD_REVIEW,
  EMPTY_ARR,
  GET_REVIEWS,
  DELETE_REVIEW,
  SEARCH,
  GET_FAVORITES,
} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-google-app-auth';
import { IOS_CLIENT_ID } from '@env';

const baseUrl = 'http://localhost:3000/api';

export const signInWithGoogleAsync = async () => {
  try {
    const { type, accessToken, idToken, user } = await Google.logInAsync({
      behavior: 'web',
      iosClientId: IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (type === 'success') {
      console.log(user);
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};

export const logIn = (userObj) => (dispatch) => {
  //BEFORE login fetch, check if the userObj being passed is undefined.
  //If so, get the user data from local storage IF there is user data in local storage.
  //If there is no user data in local storage, log in fetch will run.
  if (userObj === undefined) {
    const userDataStr = AsyncStorage.getItem('USER_DATA');
    //user data must be parsed back to JSON
    // let userDataObj = JSON.parse(userDataStr);
    if (userDataStr) {
      userDataStr.then((value) => {
        console.log('user data from local storage', value);
        dispatch({ type: LOG_IN, payload: value });
      });
    }
    return;
  }
  //normal log in fetch
  fetch(`${baseUrl}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.id) {
        console.log(`Found user ${data.username}`, data);
        //If user was fetched succesfully, user data will be added to local storage
        AsyncStorage.setItem('USER_DATA', JSON.stringify(data));
        dispatch({ type: LOG_IN, payload: data });
      } else {
        console.log('user not found');
        window.alert('Wrong Username or Password Please Try Again');
      }
    })
    .catch(console.log);
};

//sign up action:
export const signUp = (userObj) => (dispatch) => {
  fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then((r) => r.json())
    .then((data) => {
      if (!data.id) {
        console.log('user creation failed');
        window.alert('Please Enter a Username and Password');
      } else {
        //this is where the user data gets stored to local storage, only if user creation was succesful. Gets turned from JSON into a string.
        AsyncStorage.setItem('USER_DATA', JSON.stringify(data));
        dispatch({ type: SIGN_UP, payload: data });
      }
    })
    .catch(console.log);
};

export const logOut = () => (dispatch) => {
  AsyncStorage.removeItem('USER_DATA');
  return dispatch({ type: LOG_OUT, payload: {} });
};

export const search = (value) => (dispatch) => {
  return dispatch({ type: SEARCH, value });
};

export const fetchRestaurants = () => (dispatch) => {
  fetch(`${baseUrl}/restaurants`)
    .then((r) => r.json())
    .then((data) => {
      // console.log('INSIDE FETCH', data);
      dispatch({ type: GET_RESTAURANTS, payload: data });
    })
    .catch(console.log);
};

export const getFavorites = (userId) => (dispatch) => {
  fetch(`${baseUrl}/favorites`)
    .then((r) => r.json())
    .then((data) => {
      // dispatch({ type: EMPTY_ARR, payload: [] });
      data.map((favs) => {
        if (favs.user.id === userId) {
          // console.log('CHECKING FAVS', favs);
          dispatch({ type: GET_FAVORITES, payload: favs });
        }
      });
    });
};

export const addToFavorite = (userId, restaurantId) => (dispatch) => {
  fetch(`${baseUrl}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      restaurant_id: restaurantId,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log('ADDTOFAVS FETCH', data);
      dispatch({ type: ADD_TO_FAVORITE, payload: data });
    });
};

export const deleteFavorite = (favId) => (dispatch) => {
  fetch(`${baseUrl}/favorites/${favId}`, {
    method: 'DELETE',
  })
    .then((r) => r.json())
    .then(() => {
      dispatch({ type: DELETE_FAVORITE, payload: favId });
      // console.log('DELETE DATA');
    });
};

export const deleteReview = (reviewId) => (dispatch) => {
  fetch(`${baseUrl}/reviews/${reviewId}`, {
    method: 'DELETE',
  })
    .then((r) => r.json())
    .then(() => {
      dispatch({ type: DELETE_REVIEW, payload: reviewId });
      // console.log('DELETE DATA');
    });
};

export const getRestaurantReviews = (restaurantId) => (dispatch) => {
  fetch(`${baseUrl}/reviews`)
    .then((r) => r.json())
    .then((data) => {
      dispatch({ type: EMPTY_ARR, payload: [] });
      data.map((review) => {
        if (review.restaurant.id === restaurantId) {
          // console.log('EACH REVIEW FETCH', review);
          dispatch({ type: GET_REVIEWS, payload: review });
        }
      });
    });
};

export const addReview = (userId, restaurantId, rating, text) => (dispatch) => {
  fetch(`${baseUrl}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      restaurant_id: restaurantId,
      rating: parseInt(rating),
      text: text,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log('ADD REVIEW FETCH', data);
      dispatch({ type: ADD_REVIEW, payload: data });
    });
};
