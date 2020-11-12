import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/currenciesSlice";

export default configureStore({
  reducer: {
    currencies: listReducer,
  },
});
