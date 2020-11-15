import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { selectToast } from "./features/favoritesSlice";
import Home from "./pages/Home";
import AddCurrency from "./pages/AddCurrency";
import Currency from "./pages/Currency";
import ToastMessage from "./components/ToastMessage";
import ModalMessage from "./components/ModalMessage";

function App() {
  const toast = useSelector(selectToast);

  return (
    <Router>
      <ModalMessage />
      {toast ? <ToastMessage /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addcurrency/" component={AddCurrency} />
        <Route exact path="/currency/:currencyId" component={Currency} />
      </Switch>
    </Router>
  );
}

export default App;
