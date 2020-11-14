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
      dispatch(showToast(true));
      dispatch(setToastMessage(favorite.code));
    } else {
      dispatch(showToast(true));
      dispatch(setToastMessage(""));
    }
  };

  return (
    <Button variant="primary" onClick={() => addCurrency(today.rates)}>
      Add
    </Button>
  );
}
