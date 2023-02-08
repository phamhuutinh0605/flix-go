import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actDeleteUserAdminApi, actEditUserAdminApi } from "./modules/actions";

export default function MangeUserAdmin() {
  const dispatch = useDispatch();
  const listUserAdmin = useSelector((state)=>state.fetchUserAdminReducer.listUserAdmin)

  const renderListUserAdmin = () => {
    return listUserAdmin?.map((userAdmin) => {
      return (
        <tr>
          <th>{userAdmin.taiKhoan}</th>
          <th>{userAdmin.hoTen}</th>
          <th>{userAdmin.email}</th>
          <th>{userAdmin.soDT}</th>
          <th>
            <button className="btn btn-danger" onClick={()=> dispatch(actDeleteUserAdminApi())}>Delete</button>
            <button className="btn btn-success" onClick={()=> dispatch(actEditUserAdminApi())}>Edit</button>
          </th>
        </tr>
      );
    });
  };

  return (
    <>
      <h3>MangeUserAdmin</h3>
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Họ Tên</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>{renderListUserAdmin()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
