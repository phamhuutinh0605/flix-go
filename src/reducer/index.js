import { combineReducers } from "redux";
import listMovieReducer from "containers/HomeTemPlate/ListMoviePage/module/reducer";
import authReducer from "containers/AdminTemPlate/AuthPage/modules/reducer";
import addFilmsRuducer from "containers/AdminTemPlate/AddFilmsPage/modules/reducer";
import addAddUserRuducer from "containers/AdminTemPlate/AddUser/modules/reducer";
import filmsReducer from "containers/AdminTemPlate/Films/modules/reducer";
import filmsItemsRuducer from "containers/AdminTemPlate/FilmsItems/modules/reducer";
import detailMovieReducer from "containers/HomeTemPlate/DetailMoviePage/module/reducer";
import DatVeReducer from "./DatVeReducer";
import lichChieuRuducer from 'containers/AdminTemPlate/LichChieu/modules/reducer'


const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addFilmsRuducer,
  addAddUserRuducer,
  filmsReducer,
  filmsItemsRuducer,
  lichChieuRuducer,
  DatVeReducer

});

export default rootReducer;