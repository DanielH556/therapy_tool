import axios from 'axios';

const api = axios.create({
   baseURL: 'http://20.226.102.6:443/',
});

export default api;