import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./Hooks/Counter";
import Navbar from "./Hooks/Navbar";
import Product from "./Hooks/Product";
import Registration from "./Hooks/Registration";
import DigtalClock from "./Hooks/DigtalClock";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/reg" component={Registration} />
          <Route exact path="/digital" component={DigtalClock} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
