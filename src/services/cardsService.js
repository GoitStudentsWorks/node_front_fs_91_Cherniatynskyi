import { instance } from './authService';

export const getCards = async id => {
  const { data } = await instance.get(`/cards/${id}`);
  return data;
};

export const addCard = async body => {
  const { data } = await instance.post('/cards', body);
  return data;
};

export const deleteCard = async id => {
  const { data } = await instance.delete(`/cards/${id}`);
  return data;
};

export const updateCard = async (id, body) => {
  const { data } = await instance.put(`/cards/${id}`, body);
  return data;
};
