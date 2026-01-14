import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-gestion-de-siniestros.onrender.com',
  //baseURL: 'http://localhost:3000/api',
});

console.log({ baseURL: api.defaults.baseURL });
export default boot(({ app }) => {
  app.config.globalProperties.$api = api;
});

export { api };
