import { instance } from './authService';

export const needHelp = async body => {
  const { data } = await instance.post('/help', body);
  return data;
};
