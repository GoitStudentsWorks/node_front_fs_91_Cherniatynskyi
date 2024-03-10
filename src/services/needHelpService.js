import { instance } from './authService';

export const needHelp = async body => {
  const { data } = await instance.post('/users/help', body);
  return data;
};
