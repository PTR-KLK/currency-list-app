import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "../features/currenciesSlice";
import favoritesReducer from "../features/favoritesSlice";
import currencyReducer from "../features/currencySlice";

export default configureStore({
  reducer: {
    currencies: currenciesReducer,
    currency: currencyReducer,
    favorites: favoritesReducer,
  },
});
