import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { selectChecked, showModal } from "../features/favoritesSlice";
import Layout from "../components/Layout";
import Favorites from "../components/Favorites";

export default function Home() {
  const dispatch = useDispatch();
  const checked = useSelector(selectChecked);

  return (
    <Layout title="Currency List">
      <Favorites />
      <LinkContainer to="/addcurrency/">
        <Button className="mr-3" variant="primary">
          Add Currency
        </Button>
      </LinkContainer>
      {checked.length > 0 ? (
        <Button variant="danger" onClick={() => dispatch(showModal(true))}>
          {" "}
          Remove Item/s
        </Button>
      ) : null}
    </Layout>
  );
}
