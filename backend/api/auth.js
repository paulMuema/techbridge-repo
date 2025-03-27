import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/";

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}users/`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}jwt/create/`, credentials);
};