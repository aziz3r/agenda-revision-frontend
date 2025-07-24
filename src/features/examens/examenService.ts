// src/features/examens/examenService.ts
import axios from 'axios';
import API_URL from '../../config/api.config';

export const fetchExamens = async () => {
  const response = await axios.get(`${API_URL}/examens?populate=*`);
  return response.data.data;
};

export const addExamen = async (data: any) => {
  const response = await axios.post(`${API_URL}/examens`, { data });
  return response.data;
};
