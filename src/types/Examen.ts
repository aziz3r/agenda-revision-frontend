import { Matiere } from './matiere';
import { Eleve } from './Eleve';
import { Session } from './Session';


export interface Examen {
  id: number;
  attributes: {
    titre: string;
    date: string;
    difficulte: 'facile' | 'moyen' | 'difficile';
  };
  matiere?: Matiere;
  eleves?: Eleve[];
  sessions?: Session[];
}
