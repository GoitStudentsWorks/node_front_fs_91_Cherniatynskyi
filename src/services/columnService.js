import { instance } from './authService';

export const getColumn = async id => {
  const { data } = await instance.get(`/columns/${id}`);
  return data;
};

export const addColumn = async body => {
  const { data } = await instance.post('/columns', body);
  return data;
};

export const deleteColumn = async id => {
  const { data } = await instance.delete(`/columns/${id}`);
  return data;
};

export const updateColumn = async (id, body) => {
  const { data } = await instance.put(`/columns/${id}`, body);
  return data;
};
