import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies, selectCurrencies } from "../features/currenciesSlice";
import { selectToast } from "../features/favoritesSlice";
import Layout from "../components/Layout";
import Select from "../components/Select";
import AddButton from "../components/AddButton";
import Message from "../components/Message";

export default function AddCurrency() {
  const dispatch = useDispatch();
  const {
    currencies: [today],
    loading,
    error,
  } = useSelector(selectCurrencies);
  const toast = useSelector(selectToast);

  const url = "http://api.nbp.pl/api/exchangerates/tables/A/";

  useEffect(() => {
    dispatch(fetchCurrencies(url));
  }, [dispatch, url]);

  return (
    <>
      {toast ? <Message /> : null}
      <Layout homeButton title="Add Currency">
        {loading || !today ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <>
            <Select />
            <AddButton />
          </>
        )}
      </Layout>
    </>
  );
}
