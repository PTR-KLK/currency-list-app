import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: {},
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

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(getCurrencies());

    await fetch("http://api.nbp.pl/api/exchangerates/tables/A/today/")
      .then((response) => response.json())
      .then((data) => dispatch(getCurrenciesSuccess(data[0])))
      .catch(() => dispatch(getCurrenciesFailure()));
  };
}

export const selectCurrencies = (state) => state.currencies;

export default currenciesSlice.reducer;
