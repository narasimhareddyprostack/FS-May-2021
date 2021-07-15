import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./ContactApp/Navbar";
import ContactApp from "./ContactApp/ContactApp";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/contact" component={ContactApp} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
