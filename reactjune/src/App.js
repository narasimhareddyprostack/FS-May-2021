import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
/* import Signup from "./FormHandling/Signup";
import SMSApp from "./FormHandling/SMSApp";

*/
import ShowPassword from "./FormHandling/ShowPassword";
function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          React -Form Handling
        </a>
      </nav>
      <ShowPassword />
    </>
  );
}

export default App;
