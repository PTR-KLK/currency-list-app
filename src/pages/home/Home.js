import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFavorite,
  setChecked,
  selectFavorites,
  selectChecked,
} from "../../features/favoritesSlice";
import Favorites from "../../components/home/favorites/Favorites";
import Select from "../../components/home/select/Select";

export default function Home() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const checked = useSelector(selectChecked);

  const removeCurrency = () => {
    if (window.confirm("Are you sure to delete these items?")) {
      dispatch(
        removeFavorite(favorites.filter((el) => !checked.includes(el.code)))
      );
      dispatch(setChecked([]));
    }
  };

  return (
    <div>
      <Select />
      <h2>Favorite currencies:</h2>
      {favorites.length > 0 ? <Favorites /> : "No favorites so far..."}
      {checked.length > 0 ? (
        <button onClick={removeCurrency}>Remove</button>
      ) : null}
    </div>
  );
}
