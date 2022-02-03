import axios from 'axios';
import authService from './auth';


const defaultOptions = {
    // baseURL: process.env.REACT_APP_BASEURL,
    baseURL: 'http://206.189.112.218/api',
};

// Update instance
const instance = axios.create(defaultOptions)

// Set the AUTH token for any request
instance.interceptors.request.use(
    config => {
        config.headers['authorization'] = `Bearer ${authService.getUserSession()}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);


// Add a response interceptor
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