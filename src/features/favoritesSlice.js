import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  checked: [],
  selected: "THB",
  toast: false,
  toastMessage: "",
  modal: false,
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
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    showToast: (state, action) => {
      state.toast = action.payload;
    },
    setToastMessage: (state, action) => {
      state.toastMessage = action.payload;
    },
    showModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  setChecked,
  setSelected,
  showToast,
  setToastMessage,
  showModal,
} = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;
export const selectChecked = (state) => state.favorites.checked;
export const selectSelected = (state) => state.favorites.selected;
export const selectToast = (state) => state.favorites.toast;
export const selectToastMessage = (state) => state.favorites.toastMessage;
export const selectModal = (state) => state.favorites.modal;

export default favoritesSlice.reducer;
