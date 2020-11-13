import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: {},
  loading: false,
  error: false,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    getCurrency: (state) => {
      state.loading = true;
    },
    getCurrencySuccess: (state, { payload }) => {
      state.currency = payload;
      state.loading = false;
      state.error = false;
    },
    getCurrencyFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getCurrency,
  getCurrencySuccess,
  getCurrencyFailure,
} = currencySlice.actions;

export function fetchCurrency(url) {
  return async (dispatch) => {
    dispatch(getCurrency());

    await fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getCurrencySuccess(data)))
      .catch(() => dispatch(getCurrencyFailure()));
  };
}

export const selectCurrency = (state) => state.currency;

export default currencySlice.reducer;
