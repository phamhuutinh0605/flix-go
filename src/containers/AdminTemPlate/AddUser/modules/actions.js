import * as ActionType from "./constants";

import api from "utils/apiUtilsVan";

export const actAddUserApi = (user) => {
    return (dispatch)=>{
        dispatch(actAddUserRequest());
        api.post("QuanLyNguoiDung/ThemNguoiDung", user)
        .then((success)=>{
            localStorage.getItem("Admin", JSON.stringify(success.data.content));
            dispatch(actAddUserSuccess(success.data.content));
        })
        .catch((error)=>{
            dispatch(actAddUserFailed(error));
        })
    }
}

const actAddUserRequest = () => {
    return {
        type: ActionType.ADD_USER_REQUEST
    }
}
const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload: data,
    }
}
const actAddUserFailed = (error) => {
    return{
        type: ActionType.ADD_USER_FAILED,
        payload: error,
    }
}