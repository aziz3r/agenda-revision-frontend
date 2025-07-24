// src/types/Eleve.ts
import { Examen } from './Examen';

export interface Eleve {
  id: number;
  nom: string;
  email: string;
  examens?: Examen[];
}
