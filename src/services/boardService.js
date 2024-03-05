import axios from 'axios';


export const instance = axios.create({
  baseURL: 'https://task-pro-7x3t.onrender.com',
});

export const getBoards = async () => {
  const { data } = await instance.get('/boards');
  return data;
};

export const addBoard = async body => {
  const { data } = await instance.post('/boards', body);
  return data;
};