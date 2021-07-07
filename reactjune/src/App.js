import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import Login from "./FormHandling/Login";
//import Registration from "./FormHandling/Registration";
import Signin from "./FormHandling/Signin";
function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          React -Form Handling
        </a>
      </nav>
      <Signin />
    </>
  );
}

export default App;
