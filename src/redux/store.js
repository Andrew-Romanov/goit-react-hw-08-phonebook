// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-reducer';
import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  // devTools: true,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
