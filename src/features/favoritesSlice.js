import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;

export default favoritesSlice.reducer;
