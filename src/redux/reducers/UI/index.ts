import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  drawerOpen: boolean;
  darkMode: boolean;
}

const initialState: UiState = {
  drawerOpen: true,
  darkMode: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});
