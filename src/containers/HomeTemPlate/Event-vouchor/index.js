import React, { Component } from "react";

export default class Event extends Component {
  render() {
    return (
      <section className="event">
        <div className="event__title">
          <h2 className="text-center">EVENTS</h2>
        </div>
        <div className="event__content">
          <div className="event__picture">
            <img src="../img/ads1.jpeg" alt="pic_1" />
          </div>
          <div className="event__picture">
            <img src="../img/ads2.jpg" alt="pic_2" />
          </div>
          <div className="event__picture">
            <img src="../img/ads3.jpg" alt="pic_3" />
          </div>
          <div className="event__picture">
            <img src="../img/ads4.jpg" alt="pic_4" />
          </div>
          <div className="event__picture">
            <img src="../img/ads0.jpg" alt="pic_5" />
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide discount__text"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active event__discount">
              <img className="d-block w-100" src="../img/discount0.png" alt="First slide" />
            </div>
            <div className="carousel-item event__discount">
              <img className="d-block w-100" src="../img/discount1.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item event__discount">
              <img className="d-block w-100" src="../img/discount2.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item event__discount">
              <img className="d-block w-100" src="../img/discount4.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item event__discount">
              <img className="d-block w-100" src="../img/discount3.jpg" alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}
