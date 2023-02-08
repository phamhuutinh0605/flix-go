import * as ActionType from "./constants";

import api from "utils/apiUtilsVan";

export const actCreateLichChieuApi = () => {
  return (dispatch) => {
    dispatch(actCreateLichChieuRequest());
    api
      .post("QuanLyDatVe/TaoLichChieu")
      .then((success) => {
        dispatch(actCreateLichChieuSuccess(success.data.content));
      })
      .catch((error) => {
        dispatch(actCreateLichChieuFailed(error));
      });
  };
};
const actCreateLichChieuRequest = () => {
  return {
    type: ActionType.CREATE_LICH_CHIEU_REQUEST,
  };
};
const actCreateLichChieuSuccess = (data) => {
  return {
    type: ActionType.CREATE_LICH_CHIEU_SUCCESS,
    payload: data,
  };
};
const actCreateLichChieuFailed = (error) => {
  return {
    type: ActionType.CREATE_LICH_CHIEU_FAILED,
    payload: error,
  };
};

export const actHeThongRapApi = () => {
  return (dispatch) => {
    dispatch(actHeThongRapReuqest());
    api
      .get("QuanLyRap/LayThongTinHeThongRap")
      .then((success) => {
        dispatch(actHeThongRapSuccess(success.data.content));
      })
      .catch((error) => {
        dispatch(actHeThongRapFailed(error));
      });
  };
};
const actHeThongRapReuqest = () => {
  return {
    type: ActionType.HE_THONG_RAP_REQUEST,
  };
};
const actHeThongRapSuccess = (data) => {
  return {
    type: ActionType.HE_THONG_RAP_SUCCESS,
    payload: data,
  };
};
const actHeThongRapFailed = (error) => {
  return {
    type: ActionType.HE_THONG_RAP_FAILED,
    payload: error,
  };
};

export const actCumRapApi = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actCumRapRequest());
    api
      .get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
      .then((success) => {
        dispatch(actCumRapSuccess(success.data.content));
      })
      .catch((error) => {
        dispatch(actCumRapFailed(error));
      });
  };
};
const actCumRapRequest = () => {
  return {
    type: ActionType.CUM_RAP_REQUEST,
  };
};
const actCumRapSuccess = (data) => {
  return {
    type: ActionType.CUM_RAP_SUCCESS,
    payload: data,
  };
};
const actCumRapFailed = (error) => {
  return {
    type: ActionType.CUM_RAP_FAILED,
    payload: error,
  };
};


export const actNgayGioChieuApi = () => {
  return (dispatch) => {
    dispatch(actNgayGioChieuRequest());
    api
      .post("QuanLyDatVe/TaoLichChieu")
      .then((success) => {
        dispatch(actNgayGioChieuSuccess(success.data.content));
      })
      .catch((error) => {
        dispatch(actNgayGioChieuFailed(error));
      });
  };
};
const actNgayGioChieuRequest = () => {
  return {
    type: ActionType.NGAY_GIO_CHIEU_REQUEST,
  };
};
const actNgayGioChieuSuccess = (data) => {
  return {
    type: ActionType.NGAY_GIO_CHIEU_SUCCESS,
    payload: data,
  };
};
const actNgayGioChieuFailed = (error) => {
  return {
    type: ActionType.NGAY_GIO_CHIEU_FAILED,
    payload: error,
  };
};

export const actGiaVeApi = () => {
  return (dispatch) => {
    dispatch(actGiaVeRequest());
    api
      .post("QuanLyDatVe/TaoLichChieu")
      .then((success) => {
        dispatch(actGiaVeSuccess(success.data.content));
      })
      .catch((error) => {
        dispatch(actGiaVeFailed(error));
      });
  };
};
const actGiaVeRequest = () => {
  return {
    type: ActionType.GIA_VE_REQUEST,
  };
};
const actGiaVeSuccess = (data) => {
  return {
    type: ActionType.GIA_VE_SUCCESS,
    payload: data,
  };
};
const actGiaVeFailed = (error) => {
  return {
    type: ActionType.GIA_VE_FAILED,
    payload: error,
  };
};
