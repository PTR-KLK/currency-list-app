import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCurrencies,
  selectCurrencies,
} from "../../features/currenciesSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { currencies, loading, error } = useSelector(selectCurrencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <label htmlFor="rates">Choose a currency to subscribe:</label>
      <select name="rates" id="rates">
        {currencies.rates &&
          currencies.rates.map((el) => (
            <option key={el.code} value={el.code}>
              {el.currency} ({el.code})
            </option>
          ))}
      </select>
    </div>
  );
}
