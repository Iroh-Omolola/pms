import axios from 'axios';

const defaultOptions = { 
    baseURL: 'https://pms-shr93.ondigitalocean.app/api'
   
 }

const instance = axios.create(defaultOptions)


instance.interceptors.request.use(
    config => {

        const token = localStorage.getItem('c-access-com')
        if(token){
            config.headers.Authorization =  token ? `Bearer ${token}` : ''; 
        }
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