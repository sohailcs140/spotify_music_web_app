import axios from 'axios';
import { SPOTIFY_TOKEN_NAME } from '../utils/constants';


const Client = axios.create({
  baseURL: 'https://api.spotify.com/v1/', 
});

const token = localStorage.getItem(SPOTIFY_TOKEN_NAME);

Client.interceptors.request.use(config => {
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


export default Client