import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Navbar from "./Navbar/Navbar";
import ContactApp from "./ContactApp/ContactApp";
import DigitalClock from "./Hooks/DigitalClock";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/digital" component={DigitalClock} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactApp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
