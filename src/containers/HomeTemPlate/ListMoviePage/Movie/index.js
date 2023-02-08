import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    console.log("123");
    return (
     movie.map(
      <div className="col-md-3">
      <div className="products__item showcase__items">
        <img className="card-img-top" src={movie.hinhAnh} alt />
        <div className="showcase__overlay">
          <h4 className="card-title showcase__text ml-3">{movie.tenPhim}fasfsadf</h4>
          <div className="card-body">
            <Link
              className="btn_detail btn__login"
              to={`/detail/${movie.maPhim}`}
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
     )
    );
  }
}
