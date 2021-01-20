import { combineReducers } from 'redux';
import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  GET_RESTAURANTS,
  ADD_REVIEW,
  DELETE_REVIEW,
} from '../actions/types';

const initialState = {
  user: null,
  reviews: [],
  restaurants: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case SIGN_UP:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
};

const getRestaurants = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
  restaurants: getRestaurants,
});
