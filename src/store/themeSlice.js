import { createSlice } from '@reduxjs/toolkit';

const saved = JSON.parse(localStorage.getItem('portfolio-theme') || '{}');

const initialState = {
  mode: saved.mode || 'dark',
  accent: saved.accent || 'blue',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', JSON.stringify({ mode: state.mode, accent: state.accent }));
    },
    setAccent(state, action) {
      state.accent = action.payload;
      localStorage.setItem('portfolio-theme', JSON.stringify({ mode: state.mode, accent: state.accent }));
    },
  },
});

export const { toggleMode, setAccent } = themeSlice.actions;
export default themeSlice.reducer;
