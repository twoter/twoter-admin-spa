import axios from 'axios';
import { authService } from '../services/auth-service';

const BASE_URL = 'http://localhost:3001';

axios.interceptors.request.use(function (config) {
  const loggedUser = authService.getLoggedUserData();
  if (loggedUser) {
    config.headers['X-AUTH-TOKEN'] = loggedUser.token;
  }

  return config;
});

axios.interceptors.response.use((response) => response, (error) => {
  if (401 === error.response.status) {
    localStorage.clear();
    window.location = '/';
  }

  return Promise.reject(error);
});

const apiClient = {
  get: (path, ...params) => axios.get(`${BASE_URL}/${path}`, ...params),
  post: (path, ...params) => axios.post(`${BASE_URL}/${path}`, ...params),
  delete: (path, ...params) => axios.delete(`${BASE_URL}/${path}`, ...params)
};

export default apiClient;
