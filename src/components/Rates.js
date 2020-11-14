import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrency, selectCurrency } from "../features/currencySlice";
import { ListGroup } from "react-bootstrap";

export default function Rates({ currencyId }) {
  const dispatch = useDispatch();
  const { currency, loading, error } = useSelector(selectCurrency);

  const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currencyId}/last/10/`;

  useEffect(() => {
    dispatch(fetchCurrency(url));
  }, [dispatch, url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <h2 className="mt-3">{currency.currency}</h2>
      <ListGroup as="ul">
        {currency.rates &&
          currency.rates.map((el) => (
            <ListGroup.Item
              as="li"
              key={el.no}
              className="d-flex justify-content-between"
            >
              {el.effectiveDate}
              <span>{el.mid} PLN</span>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}
