import {ADD_TO_FAVORITE, HIDE_TOAST, REMOVE_FROM_FAVORITE,} from "../types";

const favoritesBooks = (state, action) => {

    if (state === undefined) {
        return {
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            maxFavorites: 4,
            showToast: false
        }
    }

    switch (action.type) {

        case ADD_TO_FAVORITE:
            const {favorites, maxFavorites} = state.favoritesBooks;
            const copyFavoritesAdd = favorites.length ? [...favorites] : [];

            if (copyFavoritesAdd.length === maxFavorites) {
                return {...state.favoritesBooks, showToast: true};
            }

            copyFavoritesAdd.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(copyFavoritesAdd));

            return {...state.favoritesBooks, favorites: [...copyFavoritesAdd]};

        case REMOVE_FROM_FAVORITE:
            const copyFavoritesRemove = [...state.favoritesBooks.favorites];
            const index = copyFavoritesRemove.findIndex((item) => item === action.payload);

            copyFavoritesRemove.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(copyFavoritesRemove));

            return {...state.favoritesBooks, favorites: [...copyFavoritesRemove]};

        case HIDE_TOAST:
            return {...state.favoritesBooks, showToast: false};

        default:
            return state.favoritesBooks
    }

};

export default favoritesBooks;