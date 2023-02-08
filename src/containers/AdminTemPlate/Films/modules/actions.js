import * as ActionType from "./constants";

import api from "utils/apiUtilsVan";

export const actFetchFilmsApi = () => {
    return (dispatch)=>{
        dispatch(actFetchFilmsRequest());
        api.get("QuanLyPhim/LayDanhSachPhim")
        .then((success)=>{
            dispatch(actFetchFilmsSuccess(success.data.content));
        })
        .catch((error)=>{
            dispatch(actFetchFilmsFailed(error));
        })
    }
}

const actFetchFilmsRequest = () => {
    return {
        type: ActionType.FILMS_REQUEST,
    }
}

const actFetchFilmsSuccess = (data) => {
    return {
        type: ActionType.FILMS_SUCCESS,
        payload: data,
    }
}

const actFetchFilmsFailed = (error) => {
    return {
        type: ActionType.FILMS_FAILED,
        payload: error,
    }
}





