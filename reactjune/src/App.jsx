import React, { Component } from "react";
import Address from "./StateEx3/Address";
import Product from "./StateEx3/Product";
class App extends Component {
  render() {
    return (
      <div>
        <h5> State Example</h5>
        <hr />
        {/*  <Address /> */}
        <Product />
      </div>
    );
  }
}

export default App;
