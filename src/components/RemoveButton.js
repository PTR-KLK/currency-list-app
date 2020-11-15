import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setChecked,
  selectFavorites,
  selectChecked,
  removeFavorite,
} from "../features/favoritesSlice";
import { Button } from "react-bootstrap";

export default function Favorites() {
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
    <Button variant="danger" onClick={removeCurrency}>
      Remove
    </Button>
  );
}
