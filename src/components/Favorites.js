import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setChecked,
  selectFavorites,
  selectChecked,
} from "../features/favoritesSlice";
import { ListGroup, FormCheck } from "react-bootstrap";

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

  const ListItem = ({ el }) => {
    return (
      <ListGroup.Item as="li" className="d-flex align-items-baseline">
        <FormCheck
          type="checkbox"
          inline
          value={el.code}
          onClick={checkCurrency}
          defaultChecked={checked.includes(el.code)}
        />
        <Link to={`/currency/${el.code}`}>
          {el.currency} ({el.code})
        </Link>
      </ListGroup.Item>
    );
  };

  return (
    <ListGroup as="ul" className="mt-3 mb-3">
      {favorites.length > 0 ? (
        favorites.map((el) => <ListItem key={el.code} el={el} />)
      ) : (
        <ListGroup.Item as="li">No favorites so far...</ListGroup.Item>
      )}
    </ListGroup>
  );
}
