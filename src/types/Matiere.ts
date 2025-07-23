import { Examen } from './Examen';

export interface Matiere {
  id: number;
  nom: string;
  couleur: string;
  examens?: Examen[];
}

