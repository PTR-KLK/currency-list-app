import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import ModalMessage from "../components/ModalMessage";
import { showModal } from "../features/favoritesSlice";

describe("Render modal", () => {
  store.dispatch(showModal(true));

  test("Renders modal", () => {
    render(
      <Provider store={store}>
        <ModalMessage />
      </Provider>
    );

    const modal = document.querySelector(".modal-content");

    expect(modal).toBeInTheDocument();
  });

  test("Cancel buton closes modal", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ModalMessage />
      </Provider>
    );

    const modal = document.querySelector(".modal-content");
    const button = getByText(/Cancel/i);
    button.click();

    expect(modal).not.toBeInTheDocument();
  });
});
