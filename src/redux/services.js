import axios from 'axios';

const BASE_URL = 'https://648e04be2de8d0ea11e87e41.mockapi.io';

export const getContacts = async () => {
  const data = await axios.get(`${BASE_URL}/contacts`);
  return data.data;
};

export const createContacts = async contact => {
  const responce = await axios.post(`${BASE_URL}/contacts`, contact);
  return responce.data;
};

export const deleteContacts = async id => {
  const {data} = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return id;
};
