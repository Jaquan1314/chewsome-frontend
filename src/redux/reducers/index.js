import { combineReducers } from 'redux';
import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  GET_RESTAURANTS,
  ADD_TO_FAVORITE,
  GET_FAVORITES,
  DELETE_FAVORITE,
  EMPTY_ARR,
  ADD_REVIEW,
  DELETE_REVIEW,
  GET_REVIEWS,
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

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    // case EMPTY_ARR:
    //   return action.payload;
    case ADD_TO_FAVORITE:
      return [action.payload, ...state];
    case GET_FAVORITES:
      return [action.payload, ...state];
    case DELETE_FAVORITE:
      return [...state.filter((favorite) => favorite.id !== action.payload)];
    default:
      return state;
  }
};

const reviewsReducer = (state = initialState.reviews, action) => {
  switch (action.type) {
    case EMPTY_ARR:
      return [];
    case GET_REVIEWS:
      return [action.payload, ...state];
    case ADD_REVIEW:
      return [action.payload, ...state];
    case DELETE_REVIEW:
      return [...state.filter((review) => review.id !== action.payload)];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
  restaurants: getRestaurants,
  favorites: favoritesReducer,
  reviews: reviewsReducer,
});
