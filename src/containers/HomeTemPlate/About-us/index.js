import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class AboutUs extends Component {
  render() {
    return (
      <>
        <section className="contact">
          <div className="contact__content">
            <div className="contact__title py-5">
              <h2 className="text-left">OUR PARTNERS</h2>
            </div>
            <div className="contact__text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </div>
            <div className="container py-5">
              <div className="row">
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="#" className="contact__partner">
                    <img
                      src="../img/partners1.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="#" className="contact__partner">
                    <img
                      src="../img/partners2.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="#" className="contact__partner">
                    <img
                      src="../img/partners3.png"
                      alt=""
                      className="partner__img"
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="#" className="contact__partner">
                    <img
                      src="../img/partners4.png"
                      alt
                      className="partner__img"
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="#" className="contact__partner">
                    <img
                      src="../img/partners5.png"
                      alt
                      className="partner__img"
                    />
                  </a>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="#" className="contact__partner">
                    <img
                      src="../img/partners6.png"
                      alt
                      className="partner__img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="products__highline" />
        <footer className="footer">
          <div className="container">
            <div className="row">
              {/* footer list */}
              <div className="col-12 col-md-3">
                <h6 className="footer__title">Download Our App</h6>
                <ul className="footer__app">
                  <li>
                    <a href="#">
                      <img src="../img/appstore.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../img/ggplay.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <h6 className="footer__title ml-3">Resources</h6>
                <div className="footer__list">
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/"
                    >
                      Pricing Plan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/"
                    >
                      Help Center
                    </NavLink>
                  </li>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <h6 className="footer__title ml-3">Legal</h6>
                <div className="footer__list">
                  <li>
                    <a>
                      <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to="/"
                      >
                        Terms of Use
                      </NavLink>
                    </a>
                  </li>
                  <li>
                    <a>
                      <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to="/"
                      >
                        Privacy Policy
                      </NavLink>
                    </a>
                  </li>
                  <li>
                    <a>
                      <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to="/"
                      >
                        Security
                      </NavLink>
                    </a>
                  </li>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-3">
                <h6 className="footer__title">Contact</h6>
                <div className="footer__list">
                  <li>
                    <a href="tel:88002345678">8 800 234 56 78</a>
                  </li>
                  <li>
                    <a href="mailto:support@flixgo.com">support@flixgo.com</a>
                  </li>
                </div>
                <ul className="footer__social"></ul>
              </div>
              <hr className="footer__highline" />
              <div className="col-12 footer__company">
                <div className="footer__copyright">
                  <small>© FlixGo, 2018—2022</small>
                </div>
                <ul className="footer__tou">
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/"
                    >
                      Terms of Use
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
