import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.19.135.138:3001'
});
