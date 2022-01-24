import React from "react";
import logo from "./logo.svg"
import {Link} from 'react-router-dom';
function Navbar() {
  {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <img
              alt=""
              src={logo}
            />
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/loginPage">
             <button type="button" className="btn btn-secondary">Login/Signup
            </button>
            </Link>
              
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;