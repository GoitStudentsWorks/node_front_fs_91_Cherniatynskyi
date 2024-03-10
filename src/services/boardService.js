import { instance, setToken } from './authService';

export const fetchGetBoards = async token => {
  setToken(`Bearer ${token}`);
  const { data } = await instance.get('/boards');
  return data;
};

export const fetchAddBoard = async body => {
  const { data } = await instance.post('/boards', body);
  return data;
};

export const fetchDeleteBoard = async id => {
  const { data } = await instance.delete(`/boards/${id}`);
  return { data, id };
};

export const fetchUpdateBoard = async (id, body) => {
  const { data } = await instance.put(`/boards/${id}`, body);
  return data;
};
