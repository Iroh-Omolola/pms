import axios from 'axios';
import authService from './auth';


const defaultOptions = {
  
    baseURL: 'http://206.189.112.218/api',
};


const instance = axios.create(defaultOptions)


instance.interceptors.request.use(
    config => {
        config.headers['authorization'] = `Bearer ${authService.getUserSession()}`;
      
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);


instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error.response);
    }
);

export default instance;

export const createAPIRequest = config => instance(config);