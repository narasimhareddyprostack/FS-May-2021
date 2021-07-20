import React from "react";
import Counter from "./Hooks/Counter";
import Message from "./Hooks/Message";
import Product from "./Hooks/Product";
let App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          React -Hooks
        </a>
      </nav>
      <Counter />
      <hr />
      <Message />
      <hr />
      <Product />
    </>
  );
};

export default App;
