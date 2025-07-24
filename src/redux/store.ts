// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';

// ✅ Corrige les chemins selon l’arborescence actuelle
import examenReducer from '../features/examens/ExamenSlice';
import matiereReducer from '../features/matieres/matiereSlice';
import sessionReducer from '../features/sessions/sessionSlice';
import eleveReducer from '../features/eleves/eleveSlice';

export const store = configureStore({
  reducer: {
    examens: examenReducer,
    matieres: matiereReducer,
    sessions: sessionReducer,
    eleves: eleveReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
