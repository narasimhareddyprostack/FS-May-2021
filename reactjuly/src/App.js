import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Navbar from "./Navbar/Navbar";
import ContactApp from "./ContactApp/ContactApp";
import DigitalClock from "./Hooks/DigitalClock";
import Message from './RComponents/Message'
import Product from './Product/Product'
import {Provider} from 'react-redux'
import Register from './Hooks/Register'
import Counter from './RComponents/Counter'
import {store} from './redux/store'

let App = () => {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/digital" component={DigitalClock} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactApp} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/counter" component={Counter}/>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/hook" component={Register}/>
        </Switch>
      </Router>
      </Provider>
    </>
  );
};

export default App;
