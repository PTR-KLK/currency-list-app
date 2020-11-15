import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import ToastMessage from "../components/ToastMessage";
import { showToast, setToastMessage } from "../features/favoritesSlice";

describe("Title and message", () => {
  store.dispatch(showToast(true));

  store.dispatch(
    setToastMessage(["Notification", "Currency already in the database"])
  );

  test("renders toast with 'Notification' title", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ToastMessage />
      </Provider>
    );

    expect(getByText(/Notification/i)).toBeInTheDocument();
  });
  test("renders toast with 'Currency already in the database' message", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ToastMessage />
      </Provider>
    );

    expect(getByText(/Currency already in the database/i)).toBeInTheDocument();
  });
});

describe("Render Toast", () => {
  store.dispatch(showToast(true));

  test("Renders toast", () => {
    render(
      <Provider store={store}>
        <ToastMessage />
      </Provider>
    );

    const toast = document.querySelector(".toast");

    expect(toast).toBeInTheDocument();
  });
  test("Close buton closes toast", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ToastMessage />
      </Provider>
    );

    const toast = document.querySelector(".toast");
    const button = getByText(/Close/i);
    button.click();

    expect(toast).not.toBeInTheDocument();
  });
});
