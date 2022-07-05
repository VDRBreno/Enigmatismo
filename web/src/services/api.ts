import axios from 'axios';

export const api = axios.create({
  baseURL: 'SERVER_URL_HERE'
});