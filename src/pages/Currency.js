import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrency, selectCurrency } from "../features/currencySlice";
import Rates from "../components/Rates";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

export default function Currency({ match }) {
  const {
    params: { currencyId },
  } = match;

  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectCurrency);

  const url = `http://api.nbp.pl/api/exchangerates/rates/a/${currencyId}/last/7/`;

  useEffect(() => {
    dispatch(fetchCurrency(url));
  }, [dispatch, url]);

  return (
    <Layout homeButton title={currencyId}>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="mt-3 text-center">Error fetching data</p>
      ) : (
        <Rates />
      )}
    </Layout>
  );
}
