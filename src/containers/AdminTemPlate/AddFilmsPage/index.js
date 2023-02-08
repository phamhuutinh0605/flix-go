import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { actAddFilmsApi } from "./modules/actions";

export default function AddFilmsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    maPhim: "",
    tenPhim: "",
    hinhAnh: "",
    moTa: "",
    hot: true,
    dangChieu: true,
    sapChieu: true,
    ngayKhoiChieu: "",
  });

  const handleOnchange = (event) => {
    const { name, value, files } = event.target;
    setState({
      ...state,
      [name]: name === "hinhAnh" ? files[0] : value,
    }); 
  };

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setState({
      ...state,
      [name]: checked
    })
  }

  const addFilms = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("tenPhim", state.tenPhim); 
    formData.append("moTa", state.moTa);
    const ngayKhoiChieu = new Date(state.ngayKhoiChieu);
    let dd = ngayKhoiChieu.getDate(), 
    mm = ngayKhoiChieu.getMonth() + 1, 
    yyyy = ngayKhoiChieu.getFullYear();
    if (dd < 10) dd = '0' + dd; 
    if (mm < 10) mm = '0' + mm;
    formData.append("ngayKhoiChieu", `${dd}/${mm}/${yyyy}`); 
    formData.append("sapChieu", state.sapChieu);
    formData.append("dangChieu", state.dangChieu);
    formData.append("hot", state.hot);
    formData.append("hinhAnh", state.hinhAnh, state.hinhAnh.name); 
    dispatch(actAddFilmsApi(formData));
    alert("Add Films Successfully");
  };


  return (
    <div>
      <h3>AddFilmsPage</h3>

      {/* <form className="container" onSubmit={addFilms(()=>{history.replace("/films")})}> */}
      <form className="container" onSubmit={addFilms}>
        <div className="form-group">
          <span>Tên phim</span>
          <input
            type="text"
            className="form-control"
            name="tenPhim"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Hình Ảnh</span>
          <input
            className="form-control"
            name="hinhAnh"
            type="file"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mô Tả</span>
          <input
            type="text"
            className="form-control"
            name="moTa"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Đang chiếu</span>
          <input type="checkbox" name="dangChieu" onChange={handleCheckBox} />
        </div>
        <div className="form-group">
          <span>Sắp chiếu</span>
          <input type="checkbox" name="sapChieu" onChange={handleCheckBox} />
        </div>
        <div className="form-group">
          <span>Hot</span>
          <input type="checkbox" name="hot" onChange={handleCheckBox} />
        </div>
        <div className="form-group">
          <span>Ngày Khởi Chiếu</span>
          <input
            type="datetime-local"
            name="ngayKhoiChieu"
            onChange={handleOnchange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Film
        </button>
      </form>
    </div>
  );
}

