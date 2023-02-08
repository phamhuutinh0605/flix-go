import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null, 
  error: null,
  filmsEdit: null,
  listFilms: [],
};

const filmsItemsRuducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DELETE_FILMS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.DELETE_FILMS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.DELETE_FILMS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.DELETE_FILMS: {
      let listFilms = [...state.listFilms];
      const index = state.listFilms.findIndex(
        (films) => films.maPhim === action.paypoad.maPhim
      );
      if (index !== -1) {
        listFilms.splice(index, 1);
        state.listFilms = listFilms;
      }
      return { ...state };
    }

    case ActionType.EDIT_FILMS_REQUEST:
      state.loading = true;
      state.filmsEdit = null;
      state.error = null;
      return { ...state };

    case ActionType.EDIT_FILMS_SUCCESS:
      state.loading = false;
      state.filmsEdit = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.EDIT_FILMS_FAILED:
      state.loading = false;
      state.filmsEdit = null;
      state.error = action.payload;
      return { ...state };

    // case ActionType.EDIT_FILMS: {
    //   state.filmsEdit = action.payload;
    //   return { ...state };
    // }

    default:
      return { ...state };
  }
};
export default filmsItemsRuducer;
