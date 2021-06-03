import {
  GET_USER_LOADING,
  GET_USER_COMPLETED,
  GET_USER_FAILURE,
} from './types';
import initialState from './initial-state';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOADING:
      return {
        ...state,
        error: '',
        loading: true,
        user: {},
        repos: [],
        orgs: [],
      };
    case GET_USER_COMPLETED:
      return {
        ...state,
        loading: false,
        error: '',
        user: action.payload.user,
        repos: action.payload.repos,
        orgs: action.payload.orgs,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        repos: [],
        orgs: [],
        error: action.payload ? action.payload.message : 'something went wrong',
      };
    default:
      return state;
  }
};
