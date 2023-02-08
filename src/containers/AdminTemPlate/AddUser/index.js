import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddUserApi } from "./modules/actions";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const addUserAd = (event) => {
    event.preventDefault();
    alert("Add User Successfully")
    dispatch(actAddUserApi(state));
  };

  return (
    <div>
      <h3>AddUserPage - Register</h3>
      <form className="container" onSubmit={addUserAd}>
        <div className="form-group">
          <span>Tai khoan</span>
          <input
            className="form-control"
            name="taiKhoan"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Mat khau</span>
          <input
            className="form-control"
            name="matKhau"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Ho ten</span>
          <input
            className="form-control"
            name="hoTen"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            className="form-control"
            name="email"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>SDT</span>
          <input
            className="form-control"
            name="soDt"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
