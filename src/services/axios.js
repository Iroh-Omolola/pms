import axios from 'axios';
import authService from './auth';

const token = localStorage.getItem('c-access-com')
const defaultOptions = { 
    baseURL: 'https://pms-shr93.ondigitalocean.app/api',
    headers:{
        Authorization: `Bearer ${token}`,
        XMLHttpRequest
    }
  
   
 }
// window.axios.default.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios?.default.headers.common['Authorization'] = `Bearer ${token}`;

const instance = axios.create(defaultOptions)

// config => {
// 	const jwtToken = localStorage.getItem(AUTH_TOKEN)
	
//   if (jwtToken) {
//     config.headers[TOKEN_PAYLOAD_KEY] = jwtToken
//   }

//   if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
// 		history.push(ENTRY_ROUTE)
// 		window.location.reload();
//   }

//   return config
// }

// instance.interceptors.request.use(
//     config => {

//         const token = localStorage.getItem('c-access-com')
//         if(token){
//             config.headers.Authorization =  token ? `Bearer ${token}` : ''; 
//             config.headers.common['Authorization'] =  token ? `Bearer ${token}` : ''; 
//         }
        
//         console.log("AuthGetSession",localStorage.getItem('c-access-com') )
//         console.log("config======",config)
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     },
// );


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