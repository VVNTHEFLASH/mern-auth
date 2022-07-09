import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper pink lighten-5">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo center white-text"
            >
              Welcome to E-Voting System
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
