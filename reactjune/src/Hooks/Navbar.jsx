import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            React - Page
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/counter" className="nav-link">
                  Counter
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reg" className="nav-link">
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/digital" className="nav-link">
                  Class - Digital Clock
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
