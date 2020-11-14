import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCurrencies,
  selectCurrencies,
} from "../../features/currenciesSlice";
import {
  addFavorite,
  removeFavorite,
  setChecked,
  selectFavorites,
  selectChecked,
} from "../../features/favoritesSlice";

export default function Home() {
  const dispatch = useDispatch();
  const {
    currencies: [today],
    loading,
    error,
  } = useSelector(selectCurrencies);
  const favorites = useSelector(selectFavorites);
  const checked = useSelector(selectChecked);

  const url = "http://api.nbp.pl/api/exchangerates/tables/A/";

  useEffect(() => {
    dispatch(fetchCurrencies(url));
  }, [dispatch, url]);

  if (loading || !today) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const addCurrency = (event, arr) => {
    const selected = event.target.value;
    const favorite = arr.find((el) => el.code === selected);

    if (!favorites.some((el) => el.code === selected)) {
      dispatch(addFavorite(favorite));
    }
  };

  const checkCurrency = (event) => {
    const selected = event.target.value;

    return !checked.includes(selected)
      ? dispatch(setChecked([...checked, selected]))
      : dispatch(setChecked(checked.filter((el) => el !== selected)));
  };

  const removeCurrency = () => {
    dispatch(
      removeFavorite(favorites.filter((el) => !checked.includes(el.code)))
    );
    dispatch(setChecked([]));
  };

  return (
    <div>
      <label htmlFor="rates">Choose a currency to subscribe:</label>
      <select
        name="rates"
        id="rates"
        onClick={(event) => addCurrency(event, today.rates)}
      >
        {today.rates.map((el) => (
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
                <input
                  type="checkbox"
                  value={el.code}
                  onClick={checkCurrency}
                />
                <Link to={`/currency/${el.code}`}>
                  {el.currency} ({el.code}):
                </Link>{" "}
                {el.mid} PLN
              </li>
            ))
          : "No favorites so far..."}
      </ul>
      {checked.length > 0 ? (
        <button onClick={removeCurrency}>Remove</button>
      ) : null}
    </div>
  );
}
