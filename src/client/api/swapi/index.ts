import axios from 'axios';

const HOST_URL = 'https://swapi.dev';
const BASE_URL = `${HOST_URL}/api/`;

const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

export default API;
