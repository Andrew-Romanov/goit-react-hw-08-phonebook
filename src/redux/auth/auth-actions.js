import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');

export const fetchRequest = createAction('auth/fetchRequest');
export const fetchSuccess = createAction('auth/fetchSuccess');
export const fetchError = createAction('auth/fetchError');

// export const fetchContactsRequest = createAction(
//   'auth/fetchContactsRequest',
// );
// export const fetchContactsSuccess = createAction(
//   'auth/fetchContactsSuccess',
// );
// export const fetchContactsError = createAction(
//   'auth/fetchContactsError'
// );

// export const addContactRequest = createAction('auth/addContactRequest');
// export const addContactSuccess = createAction('auth/addContactSuccess');
// export const addContactError = createAction('auth/addContactError');

// export const deleteContactRequest = createAction(
//   'auth/deleteContactRequest',
// );
// export const deleteContactSuccess = createAction(
//   'auth/deleteContactSuccess',
// );
// export const deleteContactError = createAction(
//   'auth/deleteContactError'
// );
