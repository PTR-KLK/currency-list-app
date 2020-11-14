import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setChecked,
  selectFavorites,
  selectChecked,
  removeFavorite,
} from "../features/favoritesSlice";
import { ListGroup, FormCheck, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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

  const removeCurrency = () => {
    if (window.confirm("Are you sure to delete these items?")) {
      dispatch(
        removeFavorite(favorites.filter((el) => !checked.includes(el.code)))
      );
      dispatch(setChecked([]));
    }
  };

  return (
    <>
      <ListGroup as="ul" className="mt-3 mb-3">
        {favorites.length > 0 ? (
          favorites.map((el) => (
            <ListGroup.Item
              key={el.code}
              as="li"
              className="d-flex justify-content-between align-items-center"
            >
              <span className="d-flex align-items-center">
                <FormCheck
                  type="checkbox"
                  inline
                  value={el.code}
                  onClick={checkCurrency}
                />
                <Link to={`/currency/${el.code}`}>
                  {el.currency} ({el.code})
                </Link>
              </span>
              <span>{el.mid} PLN</span>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item as="li">No favorites so far...</ListGroup.Item>
        )}
      </ListGroup>
      <LinkContainer to="/addcurrency/">
        <Button className="mr-3" variant="primary">
          Add Currency
        </Button>
      </LinkContainer>
      {checked.length > 0 ? (
        <Button variant="danger" onClick={removeCurrency}>
          Remove
        </Button>
      ) : null}
    </>
  );
}
