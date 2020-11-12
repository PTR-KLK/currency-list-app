import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCurrencies,
  selectCurrencies,
} from "../../features/currenciesSlice";
import { addFavorite, selectFavorites } from "../../features/favoritesSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { currencies, loading, error } = useSelector(selectCurrencies);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const addCurrency = (event) => {
    const selected = event.target.value;
    const favorite = currencies.rates.find((el) => el.code === selected);

    if (!favorites.some((el) => el.code === selected)) {
      dispatch(addFavorite(favorite));
    }
  };

  return (
    <div>
      <label htmlFor="rates">Choose a currency to subscribe:</label>
      <select name="rates" id="rates" onClick={addCurrency}>
        {currencies.rates &&
          currencies.rates.map((el) => (
            <option key={el.code} value={el.code}>
              {el.currency} ({el.code})
            </option>
          ))}
      </select>
      <h2>Favorite currencies:</h2>
      <ul>
        {favorites.length > 0
          ? favorites.map((el) => (
              <li key={el.code}>
                {el.currency} ({el.code}): {el.mid} PLN
              </li>
            ))
          : "No favorites so far..."}
      </ul>
    </div>
  );
}
