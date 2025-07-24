// src/features/examens/examenSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchExamens } from './examenService';

export const loadExamens = createAsyncThunk('examens/load', async () => {
  return await fetchExamens();
});

const examenSlice = createSlice({
  name: 'examens',
  initialState: {
    examens: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadExamens.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadExamens.fulfilled, (state, action) => {
        state.examens = action.payload;
        state.loading = false;
      })
      .addCase(loadExamens.rejected, (state, action) => {
        state.error = action.error.message || 'Erreur';
        state.loading = false;
      });
  },
});

export default examenSlice.reducer;
