import axios from '~/setup/instance';
export const refreshToken = async () => {
  return await axios.post('http://localhost:1337/api/token/refresh');
};
