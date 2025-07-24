// src/features/matieres/matiereSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMatieres } from './matiereService';

export const loadMatieres = createAsyncThunk('matieres/load', async () => {
  return await fetchMatieres();
});

const matiereSlice = createSlice({
  name: 'matieres',
  initialState: {
    matieres: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMatieres.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMatieres.fulfilled, (state, action) => {
        state.matieres = action.payload;
        state.loading = false;
      })
      .addCase(loadMatieres.rejected, (state, action) => {
        state.error = action.error.message || 'Erreur';
        state.loading = false;
      });
  },
});

export default matiereSlice.reducer;
