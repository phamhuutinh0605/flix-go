import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header__flixgo navbar-dark bg-dark ">
        <nav className="navbar navbar-expand-lg logo_header">
          <a className="navbar-brand font-weight-bold" href="#">
            FLIX <span className="header__logo">GO</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse header__flixgo"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav header__menu ">
              <li className="nav-item dropdown header__listitem">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  HOME
                </a>
                <div
                  className="dropdown-menu  bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item text-light " href="#">
                    Action
                  </a>
                  <a className="dropdown-item text-light" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item text-light" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown header__listitem ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  CATALOG
                </a>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item text-light" href="#">
                    Action
                  </a>
                  <a className="dropdown-item text-light" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item text-light" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item header__listitem">
                <a className="nav-link" href="#">
                  PRICING PLAN
                </a>
              </li>
              <li className="nav-item header__listitem">
                <a className="nav-link" href="#">
                  HELP
                </a>
              </li>

              <li className="nav-item header__listitem">
                <a className="nav-link" href="/admin">
                  ADMIN
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <form className="form-inline my-2 my-lg-0 form__login">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@fat"
            className="btn__login"
          >
            SIGN IN
          </button>
        </form>
      </header>
    );
  }
}
