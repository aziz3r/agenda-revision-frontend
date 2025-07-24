// src/features/eleves/eleveSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEleves } from './eleveService.ts';

export const loadEleves = createAsyncThunk('eleves/load', async () => {
  return await fetchEleves();
});

const eleveSlice = createSlice({
  name: 'eleves',
  initialState: {
    eleves: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEleves.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadEleves.fulfilled, (state, action) => {
        state.eleves = action.payload;
        state.loading = false;
      })
      .addCase(loadEleves.rejected, (state, action) => {
        state.error = action.error.message || 'Erreur';
        state.loading = false;
      });
  },
});

export default eleveSlice.reducer;
