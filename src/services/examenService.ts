import api from './api';
import { Examen } from '../types/Examen';

export const getExamens = async (): Promise<Examen[]> => {
  const response = await api.get('/examens?populate=*');
  return response.data.data.map((item: any) => ({
    id: item.id,
    titre: item.attributes.titre,
    date: item.attributes.date,
    difficulte: item.attributes.difficulte,
    matiere: item.attributes.matiere,
    eleves: item.attributes.eleves,
    sessions: item.attributes.sessions
  }));
};
