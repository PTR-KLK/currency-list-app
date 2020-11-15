import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrencies } from "../features/currenciesSlice";
import {
  addFavorite,
  showToast,
  setToastMessage,
  selectFavorites,
  selectSelected,
} from "../features/favoritesSlice";
import { Button } from "react-bootstrap";

export default function AddButton() {
  const dispatch = useDispatch();
  const {
    currencies: [today],
  } = useSelector(selectCurrencies);
  const favorites = useSelector(selectFavorites);
  const selected = useSelector(selectSelected);

  const addCurrency = (arr) => {
    const favorite = arr.find((el) => el.code === selected);

    if (!favorites.some((el) => el.code === selected)) {
      dispatch(addFavorite(favorite));
      dispatch(
        setToastMessage([
          "Currency added",
          `${favorite.code} added to collection`,
        ])
      );
      dispatch(showToast(true));
    } else {
      dispatch(setToastMessage([]));
      dispatch(showToast(true));
    }
  };

  return (
    <Button variant="primary" onClick={() => addCurrency(today.rates)}>
      Add
    </Button>
  );
}
