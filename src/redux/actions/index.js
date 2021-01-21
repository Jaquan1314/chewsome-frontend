import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  GET_RESTAURANTS,
  ADD_REVIEW,
  DELETE_REVIEW,
  SEARCH,
} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application.json',
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
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
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
  fetch('http://localhost:3000/api/restaurants')
    .then((r) => r.json())
    .then((data) => {
      // console.log(restaurants);
      dispatch({ type: GET_RESTAURANTS, payload: data.businesses });
    });
};
