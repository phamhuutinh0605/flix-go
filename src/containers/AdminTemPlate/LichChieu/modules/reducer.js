import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null, 
  error: null,
  heThongRap: [], 
  cumRap: [],
  ngayChieuGioChieu: "",
  giaVe: "",
};

const lichChieuRuducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_LICH_CHIEU_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.CREATE_LICH_CHIEU_SUCCESS:
      state.loading = false;
      state.data = action.payload; 
      state.error = null;
      return { ...state };

    case ActionType.CREATE_LICH_CHIEU_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

      case ActionType.HE_THONG_RAP_REQUEST:
      state.loading = true;
      state.heThongRap = null;
      state.error = null;
      return { ...state };

    case ActionType.HE_THONG_RAP_SUCCESS:
      state.loading = false;
      state.heThongRap = action.payload; 
      state.error = null;
      return { ...state };

    case ActionType.HE_THONG_RAP_FAILED:
      state.loading = false;
      state.heThongRap = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.CUM_RAP_REQUEST:
      state.loading = true;
      state.cumRap = null;
      state.error = null;
      return { ...state };

    case ActionType.CUM_RAP_SUCCESS:
      state.loading = false;
      state.cumRap = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.CUM_RAP_FAILED:
      state.loading = false;
      state.cumRap = null;
      state.error = action.payload;
      return { ...state };

      case ActionType.NGAY_GIO_CHIEU_REQUEST:
      state.loading = true;
      state.ngayChieuGioChieu = null;
      state.error = null;
      return { ...state };

    case ActionType.NGAY_GIO_CHIEU_SUCCESS:
      state.loading = false;
      state.ngayChieuGioChieu = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.NGAY_GIO_CHIEU_FAILED:
      state.loading = false;
      state.ngayChieuGioChieu = null;
      state.error = action.payload;
      return { ...state };


      case ActionType.GIA_VE_REQUEST:
        state.loading = true;
        state.giaVe = null;
        state.error = null;
        return { ...state };
  
      case ActionType.GIA_VE_SUCCESS:
        state.loading = false;
        state.giaVe = action.payload;
        state.error = null;
        return { ...state };
  
      case ActionType.GIA_VE_FAILED:
        state.loading = false;
        state.giaVe = null;
        state.error = action.payload;
        return { ...state };
      

    default:
      return { ...state };
  }
};
export default lichChieuRuducer;
