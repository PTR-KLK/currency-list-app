import React from "react";
import Rates from "../components/Rates";
import Layout from "../components/Layout";

export default function Currency({ match }) {
  const {
    params: { currencyId },
  } = match;

  return (
    <Layout homeButton title={currencyId}>
      <Rates currencyId={currencyId} />
    </Layout>
  );
}
