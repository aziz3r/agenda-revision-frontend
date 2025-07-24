// src/features/sessions/sessionService.ts
import axios from 'axios';
import API_URL from '../../config/api.config';

export const fetchSessions = async () => {
  const response = await axios.get(`${API_URL}/sessions?populate=*`);
  return response.data.data;
};

export const addSession = async (data: any) => {
  const response = await axios.post(`${API_URL}/sessions`, { data });
  return response.data;
};
