import React, { Component } from "react";
import Movie from "./Movie";
import { actFetchListMovie } from "./module/action";
import { connect } from "react-redux";
// import Loading from "components/Loading";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie = () => {
    console.log(123);
    return this.props.data?.map((movie) => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };

  render() {
    const { loading } = this.props;
    // if (loading) return <Loading />;

    return (
      // <div className="container">
      // {/* <div className="row"> */}
      //   {/* {this.renderListMovie()} */}

      // </div>
      // </div>
      <section className="products">
        <div className="product__container">
          <div className="products__title">
            <h2 className="text-center">NEW ITEMS OF THIS SEASON</h2>
          </div>
          <div className="products__content">
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/1/2/1200x1800-ant-man3.jpg"
                alt
              />
              <div className="product__text">
                <a href="../DetailMoviePage/index.js">
                  <span>
                    NGƯỜI KIẾN VÀ CHIẾN BINH ONG:
                    <br />
                    THẾ GIỚI LƯỢNG TỬ
                  </span>
                  <p>Action</p>
                  <p>8.4</p>
                </a>
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/h/shazam_fotg_payoff_poster_1_.jpg"
                alt
              />
              <div className="product__text">
                <span>
                  SHAZAM! <br />
                  CƠN THỊNH NỘ CỦA CÁC VỊ THẦN
                </span>
                <p>Action</p>
                <p>8.4</p>
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_50x70cm_swo_1_.jpg"
                alt
              />
              <div className="product__text">
                <span>I Dream in Another Language</span>
                <p>Action</p>
                <p>8.4</p>
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg"
                alt
              />
              <div className="product__text">
                <span>I Dream in Another Language</span>
                <p>Action</p>
                <p>8.4</p>
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/n/dnd_teaser_1_sheet_vie_1_.jpg"
                alt
              />
              <div className="product__text">
                <span>
                  NGỤC TỐI & RỒNG: <br />
                  DANH DỰ CỦA KẺ TRỘM
                </span>
                <p>Action</p>
                <p>8.4</p>
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/b/a/babylon-700x1000px.jpg"
                alt
              />
              <div className="product__text">
                <span>I Dream in Another Language</span>
                <p>Action</p>
                <p>8.4</p>
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/a/mario_700x1000.jpg"
                alt
              />
              <div className="product__text">
                <span>PHIM ANH EM SUPER MARIO</span>
                <p>Action</p>
                <p>8.4</p>
              </div>
            </div>
            <div className="products__item">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/7/0/700x1000-slsl.jpg"
                alt
              />
              <div className="product__text">
                <span>SIÊU LỪA GẶP SIÊU LẦY</span>
                <p>Action</p>
                <p>8.4</p>
              </div>
            </div>
          </div>
          <hr className="products__highline" />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
