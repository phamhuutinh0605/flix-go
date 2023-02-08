import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FilmsItem from "../FilmsItems/FilmsItem";
import { actFetchFilmsApi } from "./modules/actions";

export default function Films() {
  const history = useHistory();
  const dispatch = useDispatch();
  const listFilms = useSelector((state) => state.filmsReducer.listFilms);

  useEffect(() => {
    dispatch(actFetchFilmsApi());
  }, []);

  const renderListFilms = () => {
    return listFilms?.map((films) => {
      return <FilmsItem key={films.maPhim} films={films} />;
    });
  };

  return (
    <div>
      <h3>List Films</h3>
      <div className="container">
        <div className="row">
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                history.push("/add-films");
              }}
            >
              Thêm phim
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Mã Phim</th>
                <th>Hình Ảnh</th>
                <th>Tên Phim</th>
                <th>Mô Tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{renderListFilms()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
