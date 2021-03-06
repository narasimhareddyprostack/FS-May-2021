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
                <Link to="/digital" className="nav-link">
                  Class - Digital Clock
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/message" className="nav-link">
                  Redux - Message
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/counter" className="nav-link">
                  Redux - Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  Product Item
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hook" className="nav-link">
                  Hook - Ref
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reducer" className="nav-link">
                  Hook - useReducer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/thunk" className="nav-link">
                  User List
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
