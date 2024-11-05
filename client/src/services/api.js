import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = (email, password) => {
    return axios.post(`${API_BASE_URL}/auth/login`, { email, password });
};
