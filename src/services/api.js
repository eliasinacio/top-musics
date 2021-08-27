import axios from "axios";

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/eliasinacio/top-musics/master/src'
});

export default api;