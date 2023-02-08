
import api from "utils/apiUtilsVan";
import * as ActionType from "./constants";

export const actFetchUserAdminApi = () => {
    return (dispatch)=>{
        dispatch(actFetchUserAdminRequest());
        api.get("QuanLyNguoiDung/LayDanhSachNguoiDung")
        .then((success)=>{
            dispatch(actFetchUserAdminSuccess(success.data.content));
        })
        .catch((error)=>{
            dispatch(actFetchUserAdminFailed(error))
        })
    }
}
const actFetchUserAdminRequest = ()=>{
    return {
        type: ActionType.FETCH_USER_ADMIN_REQUEST
    }
}
const actFetchUserAdminSuccess = (data) => {
return {
    type: ActionType.FETCH_USER_ADMIN_SUCCESS,
    payload: data,
}
}
const actFetchUserAdminFailed = (error) => {
    return{
        type: ActionType.FETCH_USER_ADMIN_FAILED,
        payload: error,
    }
}

export const actDeleteUserAdminApi = () => {
    return (dispatch)=>{
        dispatch(actDeleteUserAdminRequest());
        api.delete("QuanLyNguoiDung/XoaNguoiDung")
        .then((success)=>{
            dispatch(actDeleteUserAdminSuccess(success.data.content));
        })
        .catch((error)=>{
            dispatch(actDeleteUserAdminFailed(error))
        })
    }
}
const actDeleteUserAdminRequest = ()=>{
    return {
        type: ActionType.DELETE_USER_ADMIN_REQUEST
    }
}
const actDeleteUserAdminSuccess = (data) => {
return {
    type: ActionType.DELETE_USER_ADMIN_SUCCESS,
    payload: data,
}
}
const actDeleteUserAdminFailed = (error) => {
    return{
        type: ActionType.DELETE_USER_ADMIN_FAILED,
        payload: error,
    }
}

export const actEditUserAdminApi = () => {
    return (dispatch)=>{
        dispatch(actEditUserAdminRequest());
        api.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung")
        .then((success)=>{
            dispatch(actEditUserAdminSuccess(success.data.content));
        })
        .catch((error)=>{
            dispatch(actEditUserAdminFailed(error))
        })
    }
}
const actEditUserAdminRequest = ()=>{
    return {
        type: ActionType.EDIT_USER_ADMIN_REQUEST
    }
}
const actEditUserAdminSuccess = (data) => {
return {
    type: ActionType.EDIT_USER_ADMIN_SUCCESS,
    payload: data,
}
}
const actEditUserAdminFailed = (error) => {
    return{
        type: ActionType.EDIT_USER_ADMIN_FAILED,
        payload: error,
    }
}