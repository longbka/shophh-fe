import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { refreshToken } from '~/utils/jwtToken';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
instance.defaults.withCredentials = true;
// Xử lý data trước khi request lên server
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
// Xử lý data sau khi response từ server
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = (error && error.response && error.response.status) || 500;
    // we can handle global errors here
    switch (status) {
      // authentication (token related issues)
      case 401:
        {
          refreshToken()
            .then((data) => {
              Cookies.set('jwt', data.jwt);
            })
            .catch((err) => {
              console.log(err);
              toast.error('Authentication (token related issues)');
              return Promise.reject(error);
            });
        }
        break;
      // forbidden (permission related issues)
      case 403: {
        toast.error('Forbidden (permission related issues)');
        return Promise.reject(error);
      }

      // bad request
      case 400: {
        toast.error('Bad request');
        return Promise.reject(error);
      }

      // not found
      case 404: {
        toast.error('Not found');
        return Promise.reject(error);
      }

      // conflict
      case 409: {
        toast.error('Conflict');
        return Promise.reject(error);
      }

      // unprocessable
      case 422: {
        toast.error('Unprocessable');
        return Promise.reject(error);
      }

      // generic api error (server related) unexpected
      default: {
        toast.error('Generic api error (server related) unexpected');
        return Promise.reject(error);
      }
    }
  },
);
export default instance;
