import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1001',
});

export default instance;
