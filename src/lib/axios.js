import axios from 'axios';

const $api = axios.create({
  //   withCredentials: true,
  baseUrl: process.env.API_HOST,
});
