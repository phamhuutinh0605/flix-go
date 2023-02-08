import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mr-2">
            <NavLink to="/add-user">AddUser</NavLink>
          </li>
          <li className="nav-item mr-2">
            <NavLink to="/films">Films</NavLink>
          </li>
          <li className="nav-item mr-2">
            <NavLink to="/dash-board">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
