import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  actDeleteFilmsApi, actEditFilmsApi,
  // actEditFilmsApi
} from "./modules/actions";

export default function FilmsItem(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { films } = props;

  return (
    <>
      <tr>
        <td>{films.maPhim}</td>
        <td>
          <img
            className="img-fluid"
            src={films.hinhAnh}
            style={{ height: "100%", width: "100%" }}
          />
        </td>
        <td>{films.tenPhim}</td>
        <td>{films.moTa}</td>
        <td>
          <button onClick={() => history.push("/edit-films")}>Edit</button>
          {/* <button onClick={() => {return (
            <tr>
            <td>{films.maPhim}</td>
            <td>
              <img
                className="img-fluid"
                src={films.hinhAnh}
                style={{ height: "100%", width: "100%" }}
              />
            </td>
            <td>{films.tenPhim}</td>
            <td>{films.moTa}</td>
          </tr>
          );
          dispatch(actEditFilmsApi())}}>Edit</button> */}
          <button onClick={() => dispatch(actDeleteFilmsApi(films.maPhim))}>
            Delete
          </button>
          <button
            onClick={() => {
              history.push("/lich-chieu");
            }} 
          >
            Lịch Chiếu
          </button>
        </td>
      </tr>
    </>
  );
}

