import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import store from "./app/store";

function App() {
  console.log(store);

  return (
    <Router>
      <main>
        <nav>
          <Link to="/">Home</Link>{" "}
        </nav>
        <header>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </main>
    </Router>
  );
}

export default App;
