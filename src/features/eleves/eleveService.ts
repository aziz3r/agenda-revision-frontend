// src/features/eleves/eleveService.ts
import axios from 'axios';
import API_URL from '../../config/api.config';

export const fetchEleves = async () => {
  const response = await axios.get(`${API_URL}/eleves`);
  return response.data.data;
};

export const addEleve = async (data: any) => {
  const response = await axios.post(`${API_URL}/eleves`, { data });
  return response.data;
};
