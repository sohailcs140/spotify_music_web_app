import axios from 'axios';
import { getToken } from '../utils/authLocalStorage';

const Client = axios.create({
  baseURL: 'https://api.spotify.com/v1/', 
});

const token = getToken();

Client.interceptors.request.use(config => {
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


export default Client