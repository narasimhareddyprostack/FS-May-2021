import React, { Component } from "react";
import Employee from "./Render/Employee";
import Profile from "./Render/Profile";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            React -List Rendering & Conditional Rendering
          </a>
        </nav>
        <Profile />
        <Employee />
      </div>
    );
  }
}

export default App;
