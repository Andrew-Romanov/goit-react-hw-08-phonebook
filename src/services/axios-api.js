import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function registerUser(credentials) {
  const { data } = await axios.post(`/users/signup`, credentials);
  return data;
}

export async function loginUser(credentials) {
  const { data } = await axios.post(`/users/login`, credentials);
  return data;
}

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(id, contact) {
  const { data } = await axios.post(`/contacts/`, { id, ...contact });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
