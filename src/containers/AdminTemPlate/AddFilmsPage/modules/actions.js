import * as ActionType from "./constants";

import api from "utils/apiUtilsVan";

export const actAddFilmsApi = (formData) => {
    return (dispatch)=>{ 
        dispatch(actAddFilmsRequest());
        api.post("QuanLyPhim/ThemPhimUploadHinh", formData)
        .then((success)=>{
            dispatch(actAddFilmsSuccess(success.data.content));
        })
        .catch((error)=>{
            console.log(error)
            dispatch(actAddFilmsFailed(error));
        })
    }
}

const actAddFilmsRequest = () => {
    return {
        type: ActionType.ADD_FILMS_REQUEST
    }
}
const actAddFilmsSuccess = (data) => {
    return {
        type: ActionType.ADD_FILMS_SUCCESS,
        payload: data,
    }
}
const actAddFilmsFailed = (error) => {
    return{
        type: ActionType.ADD_FILMS_FAILED,
        payload: error,
    }
}







