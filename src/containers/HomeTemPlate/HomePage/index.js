import React, { Component } from "react";
import Header from "../Header";
import Carousel from "../Carousel";
import ListMoviePage from "../ListMoviePage";
import Event from "../Event-vouchor";
import AboutUs from "../About-us";
export default class HomePage extends Component {
  render() {
    return (
      <>
      <Header/>
      <Carousel/>
        <section className="products">
          {/* <div className="products__title">
            <h2 className="text-center">NEW ITEMS OF THIS SEASON</h2>
          </div> */}
                  <ListMoviePage />
          <div className="products__background">
            {/* <div className="products__content">
              <div className="container">
                <div className="row showcase__list">
                </div>
              </div>
            </div> */}
          </div>
          <hr className="products__highline" />
        </section> 
        <Event/>
        <AboutUs/>
      </>
    );
  }
}
