// src/types/Matiere.ts
import { Examen } from './Examen';

export interface Matiere {
  id: number;
  nom: string;
  difficulte: string; // 'Facile', 'Moyen', 'Difficile'
  examens?: Examen[];
}
