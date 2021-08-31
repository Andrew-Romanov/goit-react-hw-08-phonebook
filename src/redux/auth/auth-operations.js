// import { v4 as uuidv4 } from 'uuid';
import * as axiosAPI from '../../services/axios-api';
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
import { store } from '../store';
import { token } from '../../services/axios-api';

export const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const data = await axiosAPI.registerUser(credentials);
    axiosAPI.token.set(data.token);

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const login = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const data = await axiosAPI.loginUser(credentials);
    axiosAPI.token.set(data.token);

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axiosAPI.logoutUser();
    axiosAPI.token.unset();

    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export const fetch = () => async dispatch => {
  dispatch(fetchRequest());

  const persistedToken = store.getState().auth.token;

  if (persistedToken === '') return dispatch(fetchError());

  token.set(persistedToken);
  try {
    const data = await axiosAPI.fetchUser();

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
