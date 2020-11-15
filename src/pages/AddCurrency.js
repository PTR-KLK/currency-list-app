import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies, selectCurrencies } from "../features/currenciesSlice";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Select from "../components/AddCurrency/Select";
import AddButton from "../components/AddCurrency/AddButton";

export default function AddCurrency() {
  const dispatch = useDispatch();
  const {
    currencies: [today],
    loading,
    error,
  } = useSelector(selectCurrencies);

  const url = "http://api.nbp.pl/api/exchangerates/tables/A/";

  useEffect(() => {
    dispatch(fetchCurrencies(url));
  }, [dispatch, url]);

  return (
    <Layout homeButton title="Add Currency">
      {loading || !today ? (
        <Loading />
      ) : error ? (
        <p className="mt-3 text-center">Error fetching data</p>
      ) : (
        <>
          <Select />
          <AddButton />
        </>
      )}
    </Layout>
  );
}
