import React from "react";
import { useSelector } from "react-redux";
import { selectCurrency } from "../../features/currencySlice";
import { ListGroup } from "react-bootstrap";

export default function Rates() {
  const { currency } = useSelector(selectCurrency);

  return (
    <ListGroup as="ul" className="mt-3 mb-3">
      {currency.rates &&
        currency.rates
          .map((el) => (
            <ListGroup.Item
              as="li"
              key={el.no}
              className="d-flex justify-content-between"
            >
              {el.effectiveDate}
              <span>{el.mid} PLN</span>
            </ListGroup.Item>
          ))
          .reverse()}
    </ListGroup>
  );
}
