import {ADD_TO_FAVORITE, HIDE_TOAST, REMOVE_FROM_FAVORITE} from "../types";

const addToFavorite = (id) => ({type: ADD_TO_FAVORITE, payload: id});
const removeFromFavorite = (id) => ({type: REMOVE_FROM_FAVORITE, payload: id});
const hideToast = () => ({type: HIDE_TOAST});

export {
    addToFavorite,
    removeFromFavorite,
    hideToast
}