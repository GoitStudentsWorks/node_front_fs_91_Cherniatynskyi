import { instance } from './authService';

export const fetchGetColumn = async id => {
  const { data } = await instance.get(`/columns/${id}`);
  return data;
};

export const fetchAddColumn = async body => {
  const { data } = await instance.post('/columns', body);
  return data;
};

export const fetchDeleteColumn = async id => {
  const { data } = await instance.delete(`/columns/${id}`);
  return { data, id };
};

export const fetchUpdateColumn = async (id, body) => {
  const { data } = await instance.put(`/columns/${id}`, body);
  return data;
};
