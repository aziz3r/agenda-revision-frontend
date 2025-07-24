// src/features/sessions/sessionSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSessions } from './sessionService';

export const loadSessions = createAsyncThunk('sessions/load', async () => {
  return await fetchSessions();
});

const sessionSlice = createSlice({
  name: 'sessions',
  initialState: {
    sessions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSessions.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadSessions.fulfilled, (state, action) => {
        state.sessions = action.payload;
        state.loading = false;
      })
      .addCase(loadSessions.rejected, (state, action) => {
        state.error = action.error.message || 'Erreur';
        state.loading = false;
      });
  },
});

export default sessionSlice.reducer;
