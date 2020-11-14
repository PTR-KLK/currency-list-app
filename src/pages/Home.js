import React from "react";
import Layout from "../components/Layout";
import Favorites from "../components/Favorites";

export default function Home() {
  return (
    <Layout title="Currency List">
      <Favorites />
    </Layout>
  );
}
