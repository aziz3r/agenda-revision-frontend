import { configureStore } from '@reduxjs/toolkit';
import examenReducer from '../features/examens/ExamenSlice';
import matiereReducer from '../features/matieres/matiereSlice';
import sessionReducer from '../features/sessions/sessionSlice';
import eleveReducer from '../features/eleves/eleveSlice';
import { api } from './api'; // <- ajout

export const store = configureStore({
  reducer: {
    examens: examenReducer,
    matieres: matiereReducer,
    sessions: sessionReducer,
    eleves: eleveReducer,
    [api.reducerPath]: api.reducer, // <- ajout
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // <- ajout
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
