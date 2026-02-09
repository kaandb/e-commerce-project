import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});