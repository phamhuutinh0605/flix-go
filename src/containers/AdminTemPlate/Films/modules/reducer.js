import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  listFilms: [], 
};

const filmsRuducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILMS_REQUEST:
      state.loading = true;
      state.listFilms = null;
      state.error = null;
      return { ...state };

    case ActionType.FILMS_SUCCESS:
      state.loading = false;
      state.listFilms = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.FILMS_FAILED:
      state.loading = false;
      state.listFilms = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default filmsRuducer;
