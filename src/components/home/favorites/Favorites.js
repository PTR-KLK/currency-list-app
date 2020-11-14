import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setChecked,
  selectFavorites,
  selectChecked,
} from "../../../features/favoritesSlice";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const checked = useSelector(selectChecked);

  const checkCurrency = (event) => {
    const selected = event.target.value;

    return !checked.includes(selected)
      ? dispatch(setChecked([...checked, selected]))
      : dispatch(setChecked(checked.filter((el) => el !== selected)));
  };

  return (
    <ul>
      {favorites.map((el) => (
        <li key={el.code}>
          <input type="checkbox" value={el.code} onClick={checkCurrency} />
          <Link to={`/currency/${el.code}`}>
            {el.currency} ({el.code}):
          </Link>{" "}
          {el.mid} PLN
        </li>
      ))}
    </ul>
  );
}
