import * as ActionType from "./constants";

import api from "utils/apiUtilsVan";

export const actAuth = (admin, history)=>{
    return (dispatch)=>{
        dispatch(actAuthRequest());
        api.post("QuanLyNguoiDung/DangNhap", admin)
        .then((success)=>{
            if(success.data.content.maLoaiNguoiDung !== "QuanTri"){
                return Promise.reject({
                    response: {
                        data: {
                            content: "ONLY ADMIN TO ACCESS",
                        }
                    }
                })
            } 
            localStorage.setItem("Admin", JSON.stringify(success.data.content));
            history.replace("/add-user");
            dispatch(actAuthSuccess(success.data));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(actAuthFailed(error));
        })
    }
}

const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    }
}

const actAuthSuccess = (data) => {
    return{
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    }
}

const actAuthFailed = (error) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: error,
    }
}










