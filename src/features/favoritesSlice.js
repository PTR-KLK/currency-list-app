import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  checked: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  setChecked,
} = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;

export const selectChecked = (state) => state.favorites.checked;

export default favoritesSlice.reducer;
