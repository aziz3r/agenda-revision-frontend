// src/types/Session.ts
import { Examen } from './Examen';

export interface Session {
  id: number;
  date: string;      // format ISO
  duree: number;     // en minutes
  examen?: Examen;
}
