import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import MakeRes from "./Pages/makeRes/MakeRes";
import ShowRes from "./Pages/showRes/ShowRes"

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/makeres">
          <MakeRes />
        </Route>
        <Route exact path="/showres">
          <ShowRes />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
