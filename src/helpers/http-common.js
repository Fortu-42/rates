import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://api.sbif.cl/api-sbifv3/recursos_api/',

  //   headers: {
  //     'X-Requested-With': 'XMLHttpRequest',
  //     'Content-Type': 'multipart/form-data',
  //     Authorization: 'Bearer 9c84db4d447c80c74961a72245371245cb7ac15f',
  //   },
});

HTTP.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['apikey'] = '9c84db4d447c80c74961a72245371245cb7ac15f';
  config.params['formato'] = 'json';
  return config;
});
