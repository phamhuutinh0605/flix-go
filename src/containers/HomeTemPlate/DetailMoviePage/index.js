import React, { Component } from "react";
import { actFetchDetailMovie } from "./module/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DetailMoviePage extends Component {
  // componentDidMount() {
  //   //lấy id (maPhim) từ url của browser
  //   const { id } = this.props.match.params;
  //   this.props.fetchData(id);
  // }

  // renderLichChieu = () => {
  //   const { data } = this.props;

  //   console.log(data);
  //   return data?.lichChieu?.heThongRapChieu.reduce((acc, item) => {
  //     const { cumRapChieu } = item;
  //     for (let cumRap of cumRapChieu) {
  //       const { lichChieuPhim } = cumRap;
  //       for (let lichChieu of lichChieuPhim) {
  //         acc.push(
  //           <tr key={lichChieu.maLichChieu}>
  //             <td>{cumRap.tenCumRap}</td>
  //             <td>{lichChieu.tenRap}</td>
  //             <td>{new Date(lichChieu.ngayKhoiChieu).toLocaleDateString()}</td>
  //             <td>{new Date(lichChieu.ngayKhoiChieu).toLocaleTimeString()}</td>
  //             <td className="td_btnbook ">
  //               <Link
  //                 className="btn_detail btn__login"
  //                 to={`/booking/${lichChieu.maLichChieu}`}
  //               >
  //                 Book
  //               </Link>
  //             </td>
  //           </tr>
  //         );
  //       }
  //       return acc;
  //     }
  //   }, []);
  // };
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie = () => {
    console.log(123);
    return this.props.data?.map((movie) => {
      return <DetailMoviePage key={movie.maPhim} movie={movie} />;
    });
  };
  render() {
    // const { data, loading } = this.props;
    // if (loading) return <div>Loading...</div>;
console.log("asdasdas")
    return (
      <div className="background__detail">
        <div className="container text-light">
          <h3>DetailMoviePage</h3>
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid" src/>
            </div>
            <div className="col-md-6">
              <table className="table text-light">
                <tbody>
                  <tr>
                    <td>Ten Phim</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Mo ta</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row text-light">
            <div className="col-md-12">
              <table className="table text-light">
                <thead>
                  <tr>
                    <th>Ten Cum Rap</th>
                    <th>Ten Rap</th>
                    <th>Ngay chieu</th>
                    <th>Gio chieu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td>afadsfasdf</td>
                    <td>asdfasdfasdf</td>
                    <td>
                      wetrgqrafsdgadfs
                    </td>
                    <td>
                     ahfgasgasgasgasg
                    </td>
                    <td className="td_btnbook ">
                      <Link
                        className="btn_detail btn__login"
                        to={`/booking`}
                      >
                        Book
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default DetailMoviePage;
