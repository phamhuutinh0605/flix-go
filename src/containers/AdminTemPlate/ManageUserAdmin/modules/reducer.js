import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  listUserAdmin: [],
  editUserAdmin: null,
  error: null,
};

const fetchUserAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USER_ADMIN_REQUEST:
      state.loading = true;
      state.listUserAdmin = null;
      state.error = null;
      return { ...state };

    case ActionType.FETCH_USER_ADMIN_SUCCESS:
      state.loading = false;
      state.listUserAdmin = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.FETCH_USER_ADMIN_FAILED:
      state.loading = false;
      state.listUserAdmin = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.DELETE_USER_ADMIN_REQUEST:
      state.loading = true;
      state.listUserAdmin = null;
      state.error = null;
      return { ...state };

    case ActionType.DELETE_USER_ADMIN_REQUEST:
      state.loading = false;
      state.listUserAdmin = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.DELETE_USER_ADMIN_REQUEST:
      state.loading = false;
      state.listUserAdmin = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.DELETE_USER_ADMIN:
      let listUserAdmin = [...state.listUserAdmin];
      const index = state.listUserAdmin.findIndex((userAdmin) => {
        userAdmin.taiKhoan === action.payload.taiKhoan;
      });
      if (index != -1) {
        listUserAdmin.splice(index, 1);
        state.listUserAdmin = listUserAdmin;
      }
      return { ...state };

    case ActionType.EDIT_USER_ADMIN_REQUEST:
      state.loading = true;
      state.editUserAdmin = null;
      state.error = null;
      return { ...state };

    case ActionType.EDIT_USER_ADMIN_SUCCESS:
      state.loading = false;
      state.editUserAdmin = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.EDIT_USER_ADMIN_FAILED:
      state.loading = false;
      state.editUserAdmin = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default fetchUserAdminReducer;
