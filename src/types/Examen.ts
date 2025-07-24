// src/types/Examen.ts
import { Matiere } from './Matiere';
import { Session } from './Session';

export interface Examen {
  id: number;
  titre: string;
  date: string; // format ISO : YYYY-MM-DD
  type: string; // ex: 'Contrôle', 'Partiel', 'Final'
  matiere?: Matiere;
  sessions?: Session[];
}
