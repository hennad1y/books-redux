import React, {useEffect, useState} from "react";
import "./favorites.page.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../../actions";
import Loading from "../../components/loading";
import Error from "../../components/error";
import BooksList from "../../components/books-list";

const FavoritesPage = () => {
    const {books, loading, error} = useSelector(({books}) => ({...books}));
    const {favorites} = useSelector(({favoritesBooks}) => ({...favoritesBooks}));
    const dispatch = useDispatch();

    const [currentData, setCurrentData] = useState([]);

    useEffect(() => fetchBooks(dispatch), [dispatch]);

    useEffect(() => {
        if (!books.length) return;
        if (!favorites.length) return;

        setCurrentData(books.filter(bookItem => favorites.indexOf(bookItem.list_id) > -1))
    }, [books, favorites]);


    if (loading) return <Loading/>;
    if (error) return <Error/>;

    return (
        <div className="row">
            <BooksList books={currentData}/>
        </div>
    )
};

export default FavoritesPage;