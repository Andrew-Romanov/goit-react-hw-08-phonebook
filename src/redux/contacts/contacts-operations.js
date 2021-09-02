import * as axiosAPI from '../../services/axios-api';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

export const fetchItems = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const contacts = await axiosAPI.fetchContacts();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addItem = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const contactWithID = await axiosAPI.addContact(contact);
    dispatch(addContactSuccess(contactWithID));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteItem = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axiosAPI.deleteContact(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
