import axios from 'axios';

axios.defaults.baseURL = 'https://64c62f97c853c26efadb2ed1.mockapi.io/';

export async function fetchAll() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addNewContact(contactToAdd) {
  const response = await axios.post(`/contacts`, contactToAdd);
  return response.data;
}

export async function deleteOneContact(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
}
