import React from 'react';

export default function EditFilms(props) {
  const {films} = props;
  
  return (<div>
      <h3>Edit Films</h3>
      
      <tr>
        <td>{films.maPhim}</td>
        <td>
          {/* <img
            className="img-fluid"
            src={films.hinhAnh}
            style={{ height: "100%", width: "100%" }}
          /> */}
          <img type="file"/>
        </td>
        <td>{films.tenPhim}</td>
        <td>{films.moTa}</td>
      </tr>
  </div>);
}
