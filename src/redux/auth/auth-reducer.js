import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './auth-actions';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   loading: false,
//   error: null,
// };

const userReducer = createReducer(
  { name: '', email: '' },
  {
    [registerSuccess]: (_, action) => action.payload.user,
    [loginSuccess]: (_, action) => action.payload.user,
    // [fetchContactsSuccess]: () => false,
    // [fetchContactsError]: () => false,
    // [addContactRequest]: () => true,
    // [addContactSuccess]: () => false,
    // [addContactError]: () => false,
    // [deleteContactRequest]: () => true,
    // [deleteContactSuccess]: () => false,
    // [deleteContactError]: () => false,
  },
);

const tokenReducer = createReducer('', {
  [registerSuccess]: (_, action) => action.payload.token,
  [loginSuccess]: (_, action) => action.payload.token,
  // [fetchContactsError]: (_, action) => action.payload,
  // [fetchContactsRequest]: () => null,
  // [addContactError]: (_, action) => action.payload,
  // [addContactRequest]: () => null,
  // [deleteContactError]: (_, action) => action.payload,
  // [deleteContactRequest]: () => null,
});

const isLoggedInReducer = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  // [fetchContactsError]: (_, action) => action.payload,
  // [fetchContactsRequest]: () => null,
  // [addContactError]: (_, action) => action.payload,
  // [addContactRequest]: () => null,
  // [deleteContactError]: (_, action) => action.payload,
  // [deleteContactRequest]: () => null,
});

const loadingReducer = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,
});

const errorReducer = createReducer(null, {
  [registerError]: (_, action) => action.payload,
  [registerRequest]: () => null,
  [loginError]: (_, action) => action.payload,
  [loginRequest]: () => null,
  [logoutError]: (_, action) => action.payload,
  [logoutRequest]: () => null,
  [fetchError]: (_, action) => action.payload,
  [fetchRequest]: () => null,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: isLoggedInReducer,
  loading: loadingReducer,
  error: errorReducer,
});
