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

export const rootReducer = combineReducers({
  user: userReducer,
});
