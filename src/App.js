import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./containers/home";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/fire">Pokémon de Fogo</Link>
              </li>
              <li>
                <Link to="/ice">Pokémon de Gelo</Link>
              </li>
              <li>
                <Link to="/electric"> Pokémon Elétrico</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/:id">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
