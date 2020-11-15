import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrencies } from "../../features/currenciesSlice";
import { setSelected } from "../../features/favoritesSlice";
import { Form } from "react-bootstrap";

export default function Select() {
  const dispatch = useDispatch();
  const {
    currencies: [today],
  } = useSelector(selectCurrencies);

  const selectCurrency = (event) => {
    dispatch(setSelected(event.target.value));
  };

  return (
    <Form className="mt-3">
      <Form.Group>
        <Form.Label>Choose a currency to subscribe:</Form.Label>
        <Form.Control as="select" onChange={selectCurrency}>
          {today.rates.map((el) => (
            <option key={el.code} value={el.code}>
              {el.currency} ({el.code})
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
