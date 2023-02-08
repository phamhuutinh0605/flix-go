import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  listFilms: [],
};

const addFilmsRuducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_FILMS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.ADD_FILMS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.ADD_FILMS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default addFilmsRuducer;
