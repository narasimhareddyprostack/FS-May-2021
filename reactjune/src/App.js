import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Employee from "./Render/Employee";
import User from "./Render/Employee";
import UserDetails from "./FormHandling/ShowPassword";

import Home from "./Routing/Home";
import Signup from "./FormHandling/Signup";
import Signin from "./FormHandling/Signin";
import About from "./Routing/About";
import Navbar from "./Routing/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login" component={Signin} />
            <Route exact path="/user" component={User} />
            <Route exact path="/user/details" component={UserDetails} />
            <Route exact path="/data" component={Employee} />
            <Route exact path="/contact" component={Signup} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
