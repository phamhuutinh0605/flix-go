import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <section className="portCarousel">
        {/* thêm carousel-fade để tạo thêm hiệu ứng " ẩn- hiện" khi chuyển nội dung cho carousel  */}
        {/* data-ride: hiệu ứng chuyển tự chuyển trang trong carousel  */}
        {/* data-ride="carousel" */}
        <div id="carouselPort" className="carousel slide carousel-fade">
          {/* các nút chuyển carousel dưới ảnh  */}
          <ol className="carousel-indicators">
            <li
              data-target="#carouselPort"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselPort" data-slide-to={1} />
            <li data-target="#carouselPort" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../img/carousel0.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="../img/carousel2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="../img/carousel1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* phần hai mũi tên chuyển nội dung carousel  */}
          <a
            className="carousel-control-prev"
            href="#carouselPort"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselPort"
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
