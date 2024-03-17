import axios from 'axios';

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true
});

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('M4rkbelloFullstackPersonalAccessToken');
};

console.log("STORE TOKEN", getTokenFromLocalStorage());

api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = getTokenFromLocalStorage();

    // Include the token in the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;