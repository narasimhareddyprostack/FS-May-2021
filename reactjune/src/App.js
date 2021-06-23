import React from "react";

import Navbar from "./Navbar";
import Card from "./Card";
class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Hello, GM</h1>
       

        <Navbar />
        <Card />
      </section>
    );
  }
}
export default App;
