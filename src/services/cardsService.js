import { instance } from './authService';

export const fetchGetCards = async id => {
  const { data } = await instance.get(`/cards/${id}`);
  return data;
};

export const fetchAddCard = async body => {
  const { data } = await instance.post('/cards', body);
  return data;
};

export const fetchDeleteCard = async id => {
  const { data } = await instance.delete(`/cards/${id}`);
  return { data, id };
};

export const fetchUpdateCard = async (id, body) => {
  const { data } = await instance.put(`/cards/${id}`, body);
  return data;
};

export const fetchUpdateColumnIdInCard = async (id, body) => {
  const { data } = await instance.patch(`/cards/${id}`, body);
  return data;
};
