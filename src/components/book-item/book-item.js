import React from "react";
import "./book-item.css";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite, removeFromFavorite} from "../../actions";

const findFavoriteById = (favorites, id) => favorites.find(favoriteItem => favoriteItem === id);

const BookItem = ({bookItem}) => {
    const {favorites} = useSelector(({favoritesBooks}) => ({...favoritesBooks}));
    const dispatch = useDispatch();

    const toggleFavorite = (id) => {
        const isFavorite = findFavoriteById(favorites, id);

        !isFavorite ? dispatch(addToFavorite(id)) : dispatch(removeFromFavorite(id))
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
            <div className="card">
                <img className="card-img-top" src={bookItem.list_image} alt={bookItem.list_name}/>
                <div className="card-body">
                    <h5 className="card-title">{bookItem.list_name}</h5>
                    <p className="card-text">{bookItem.books[0].description}</p>
                    <a href={bookItem.books[0].amazon_product_url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn btn-primary">Look on Amazon</a>
                    <i className={findFavoriteById(favorites, bookItem.list_id) ? "fa fa-star" : "fa fa-star-o"}
                       onClick={() => toggleFavorite(bookItem.list_id)}
                    />
                </div>
            </div>
        </div>
    )
};

export default BookItem;