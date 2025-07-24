// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import examenReducer from './slices/examenSlice.ts';
import matiereReducer from './slices/matiereSlice.ts';
import sessionReducer from '../features/sessions/sessionSlice.ts';
import eleveReducer from '../features/eleves/eleveSlice';

export const store = configureStore({
  reducer: {
    examens: examenReducer,
    matieres: matiereReducer,
    sessions: sessionReducer,
    eleves: eleveReducer,
  },
});

// Type de l’état global
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
