import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Currency from "./pages/currency/Currency";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <Link to="/">Home</Link>{" "}
        </nav>
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/currency/:currencyId" component={Currency} />
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default App;
