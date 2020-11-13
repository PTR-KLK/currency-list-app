import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  loading: false,
  error: false,
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    getCurrencies: (state) => {
      state.loading = true;
    },
    getCurrenciesSuccess: (state, { payload }) => {
      state.currencies = payload;
      state.loading = false;
      state.error = false;
    },
    getCurrenciesFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getCurrencies,
  getCurrenciesSuccess,
  getCurrenciesFailure,
} = currenciesSlice.actions;

export function fetchCurrencies(url) {
  return async (dispatch) => {
    dispatch(getCurrencies());

    await fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getCurrenciesSuccess(data)))
      .catch(() => dispatch(getCurrenciesFailure()));
  };
}

export const selectCurrencies = (state) => state.currencies;

export default currenciesSlice.reducer;
