import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCurrency from "./pages/AddCurrency";
import Currency from "./pages/Currency";
import ToastMessage from "./components/ToastMessage";
import ModalMessage from "./components/ModalMessage";

function App() {
  return (
    <Router>
      <ModalMessage />
      <ToastMessage />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addcurrency/" component={AddCurrency} />
        <Route exact path="/currency/:currencyId" component={Currency} />
      </Switch>
    </Router>
  );
}

export default App;
