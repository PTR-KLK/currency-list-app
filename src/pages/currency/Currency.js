import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrency, selectCurrency } from "../../features/currencySlice";

export default function Currency({ match }) {
  const dispatch = useDispatch();
  const { currency, loading, error } = useSelector(selectCurrency);
  const {
    params: { currencyId },
  } = match;

  const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currencyId}/last/10/`;

  useEffect(() => {
    dispatch(fetchCurrency(url));
  }, [dispatch, url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>
        {currency.currency} ({currency.code}):{" "}
      </h2>
      <ul>
        {currency.rates &&
          currency.rates.map((el) => (
            <li key={el.no}>
              {el.effectiveDate}: {el.mid}PLN
            </li>
          ))}
      </ul>
    </div>
  );
}
