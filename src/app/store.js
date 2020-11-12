import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/currenciesSlice";
import favoritesReducer from "../features/favoritesSlice";

export default configureStore({
  reducer: {
    currencies: listReducer,
    favorites: favoritesReducer,
  },
});
