// import { v4 as uuidv4 } from 'uuid';
import * as axiosAPI from '../../services/axios-api';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  // logoutRequest,
  // logoutSuccess,
  // logoutError,
  // fetchRequest,
  // fetchSuccess,
  // fetchError,
} from './auth-actions';

export const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const data = await axiosAPI.registerUser(credentials);

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const login = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const data = await axiosAPI.loginUser(credentials);

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

// export const addItem = contact => async dispatch => {
//   dispatch(addContactRequest());

//   try {
//     const id = uuidv4();
//     await axiosAPI.addContact(id, contact);
//     dispatch(addContactSuccess({ id, ...contact }));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// export const deleteItem = id => async dispatch => {
//   dispatch(deleteContactRequest());

//   try {
//     await axiosAPI.deleteContact(id);
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };
