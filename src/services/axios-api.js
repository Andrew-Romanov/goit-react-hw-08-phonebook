import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    // For GET and POST requests separately
    // axios.defaults.headers.post.Authorization = `Bearer ${token}`;
    // axios.defaults.headers.get.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function registerUser(credentials) {
  const { data } = await axios.post(`/users/signup`, credentials);
  return data;
}

export async function loginUser(credentials) {
  const { data } = await axios.post(`/users/login`, credentials);
  return data;
}

export async function logoutUser() {
  const { data } = await axios.post(`/users/logout`);
  return data;
}

export async function fetchUser() {
  const { data } = await axios.get(`/users/current`);
  return data;
}

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts/`, contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
