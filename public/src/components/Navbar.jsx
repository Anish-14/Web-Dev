import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Timer from "./Timer";

const Navbar = (props) => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-logo">
        <Link to="/">Vidgraph</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/watch-later" className="nav-link nav-watch-later">
          Watch Later
          <span id="watch-later-count">{props.watchcount}</span>
        </Link>
      </div>
      <div className="navbar-timer">
        <Timer />
      </div>
    </nav>
  );
};

export default Navbar;