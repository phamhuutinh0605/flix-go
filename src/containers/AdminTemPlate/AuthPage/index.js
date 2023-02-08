import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actAuth } from "./modules/actions";

export default function AuthPage(props) {
  const history = useHistory(); 
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    nameAdmin: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(
      actAuth({ taiKhoan: state.nameAdmin, matKhau: state.password }, history) 
    );
  };

  return (
    <div className="container">
      <h3>AuthPage</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label> Admin Name</label>
          <input
            type="text"
            className="form-control"
            name="nameAdmin"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
