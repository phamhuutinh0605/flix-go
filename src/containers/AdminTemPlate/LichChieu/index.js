import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actCumRapApi,
  actCreateLichChieuApi,
  actGiaVeApi,
  actHeThongRapApi,
  actNgayGioChieuApi,
} from "./modules/actions";

export default function LichChieu(props) {
  const dispatch = useDispatch();
  const heThongRap = useSelector((state)=> state.lichChieuRuducer.heThongRap);
  const cumRap = useSelector((state)=> state.lichChieuRuducer.cumRap);
  const {films} = props;

  const [state, setState] = useState({
    maCumRap: "",
    ngayChieuGioChieu: "",
    giaVe: "",
  });


  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleLichChieu = (event) => {
    event.preventDefault();
    // alert("Create Showtimes Successfully");
    dispatch(actCreateLichChieuApi());
  };

  useEffect(() => {
    dispatch(actHeThongRapApi());
    // dispatch(actCumRapApi(maHeThongRap)); 
    dispatch(actNgayGioChieuApi());
    dispatch(actGiaVeApi());
  }, []);
  useEffect(()=>{
    if (state.maHeThongRap) dispatch(actCumRapApi(state.maHeThongRap)); // nếu có mã hệ thống rạp thì mới gọi để lấy cumrap
  }, [state.maHeThongRap]) // state.maHeThongRap thay đổi thì gọi api lên để lấy cumrap

  const renderHeThongRap = () => {
    return heThongRap?.map((maHeThongRap)=>{
      return (
        <option key={maHeThongRap.maHeThongRap} value={maHeThongRap.maHeThongRap}>{maHeThongRap.tenHeThongRap}</option>
      )
    })
  }
  const renderCumRap = () => {
    return cumRap?.map((maCumRap)=>{
      return (
        <option key={maCumRap.maCumRap}>{maCumRap.tenCumRap}</option>
      )
    })
  }

  return (
    <div>
      {/* {films.tenPhim} */}
      <h3>Tạo Lịch Chiếu Phim - </h3>

      <form onSubmit={handleLichChieu}>
        <div className="form-group">
          <label>Hệ thống rạp</label>
          <select
            className="form-control"
            name="maHeThongRap"
            onChange={handleOnChange}
          >
            {renderHeThongRap()}
          </select>
        </div>
        <div className="form-group">
          <label>Cụm rạp</label>
          <select
            className="form-control"
            name="maCumRap"
            onChange={handleOnChange}
          >
            {renderCumRap()}
          </select>
        </div>
        <div className="form-group">
          <label>Ngày giờ chiếu</label>
          <input
            type="datetime-local"
            name="ngayChieuGioChieu"
            onChange={handleOnChange}
          /> 
        </div>
        <div className="form-group">
          <label>Giá vé</label>
          <input type="number" name="giaVe" onChange={handleOnChange} />
        </div>
        <button className="bnt btn-success">Tạo Lịch Chiếu</button>
      </form>
    </div>
  );
} 

