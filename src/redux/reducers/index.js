import { combineReducers } from 'redux';
import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  GET_RESTAURANTS,
  ADD_REVIEW,
  DELETE_REVIEW,
  SEARCH,
} from '../actions/types';

const initialState = {
  user: {},
  reviews: [],
  restaurants: [],
  value: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case SIGN_UP:
      return action.payload;
    case LOG_OUT:
      return action.payload;
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

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      const { value } = action;
      const restaurants = state.restaurants.filter((val) =>
        val.includes(value)
      );
      return { ...state, value, restaurants };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
  restaurants: getRestaurants,
  value: searchReducer,
});
