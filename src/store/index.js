import { combineReducers } from 'redux';
import { userReducer } from 'store/user/reducer';

export default combineReducers({
  user: userReducer,
});

export * as actionCreators from './actions';
