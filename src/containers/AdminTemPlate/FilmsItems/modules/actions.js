import * as ActionType from "./constants";

import api from "utils/apiUtilsVan";

export const actDeleteFilmsApi = (maPhim) => {
    return (dispatch)=>{
        dispatch(actDeleteFilmsRequest());
        api.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
        .then((success)=>{
            dispatch(actDeleteFilmsSuccess(success.data.content));// xoá thành công thì dispatch để lấy lại data = actFetchFilmsApi
        })
        .catch((error)=>{
            dispatch(actDeleteFilmsFailed(error));
        })
    }
}

export const actEditFilmsApi = () => {
    return (dispatch)=>{
        dispatch(actEditFilmsRequest());
        api.post("QuanLyPhim/CapNhatPhimUpload")
        .then((success)=>{
            dispatch(actEditFilmsSuccess(success.data.content));
        })
        .catch((error)=>{
            dispatch(actEditFilmsFailed(error));
        })
    }
}
const actDeleteFilmsRequest = () => {
    return {
        type: ActionType.DELETE_FILMS_REQUEST,
    }
}
const actDeleteFilmsSuccess = (data) => {
    return {
        type: ActionType.DELETE_FILMS_SUCCESS,
        payload: data,
    }
}
const actDeleteFilmsFailed = (error) => {
    return {
        type: ActionType.DELETE_FILMS_FAILED,
        payload: error,
    }
}

// const actDeleteFilms = (films) => {
//     return {
//         type: ActionType.DELETE_FILMS,
//         payload: films,
//     }
// }


// const actEditFilms = (films) => {
//     return {
//         type: ActionType.EDIT_FILMS,
//         payload: films,
//     }
// }
const actEditFilmsRequest = () => {
    return {
        type: ActionType.DELETE_FILMS_REQUEST,
    }
}
const actEditFilmsSuccess = (data) => {
    return {
        type: ActionType.DELETE_FILMS_SUCCESS,
        payload: data,
    }
}
const actEditFilmsFailed = (error) => {
    return {
        type: ActionType.DELETE_FILMS_FAILED,
        payload: error,
    }
}







