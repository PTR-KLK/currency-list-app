import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { selectChecked } from "../features/favoritesSlice";
import Layout from "../components/Layout";
import Favorites from "../components/Favorites";
import RemoveButton from "../components/RemoveButton";

export default function Home() {
  const checked = useSelector(selectChecked);

  return (
    <Layout title="Currency List">
      <Favorites />
      <LinkContainer to="/addcurrency/">
        <Button className="mr-3" variant="primary">
          Add Currency
        </Button>
      </LinkContainer>
      {checked.length > 0 ? <RemoveButton /> : null}
    </Layout>
  );
}
