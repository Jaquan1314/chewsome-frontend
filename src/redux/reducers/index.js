import { combineReducers } from 'redux';
import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  GET_RESTAURANTS,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  ADD_REVIEW,
  DELETE_REVIEW,
  SEARCH,
} from '../actions/types';

const initialState = {
  user: {},
  reviews: [],
  restaurants: [],
  favorites: [],
  value: '',
};

const userReducer = (state = initialState.user, action) => {
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

const getRestaurants = (state = initialState.restaurants, action) => {
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
        val.name.includes(value.toLowerCase())
      );
      return { ...state, value, restaurants };
    default:
      return state;
  }
};

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [action.payload, ...state];
    case REMOVE_FROM_FAVORITE:
      return action.payload;
    default:
      return state;
  }
};

const reviewsReducer = (state = initialState.reviews, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return [action.payload, ...state];
    case DELETE_REVIEW:
      let newArray = [...state];
      let indexOfDeleted = newArray.findIndex(
        (review) => review.id === action.payload
      );
      newArray.splice(indexOfDeleted, 1);
      return newArray;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
  restaurants: getRestaurants,
  value: searchReducer,
  favorites: favoritesReducer,
  reviews: reviewsReducer,
});
