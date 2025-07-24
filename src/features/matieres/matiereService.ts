// src/features/matieres/matiereService.ts
import axios from 'axios';
import API_URL from '../../config/api.config';

export const fetchMatieres = async () => {
  const response = await axios.get(`${API_URL}/matieres?populate=*`);
  return response.data.data;
};

export const addMatiere = async (data: any) => {
  const response = await axios.post(`${API_URL}/matieres`, { data });
  return response.data;
};
