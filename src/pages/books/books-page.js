import React, {useEffect, useRef, useState} from "react";
import "./books-page.css";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../components/loading";
import Error from "../../components/error";
import {fetchBooks} from "../../actions";
import BooksList from "../../components/books-list";
import Tools from "../../components/tools";

const BooksPage = () => {
    const {books, loading, error} = useSelector(({books}) => ({...books}));
    const dispatch = useDispatch();

    const pageLimit = 8;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState(books);
    const [cloneBooks, setCloneBooks] = useState(books);
    const [search, setSearch] = useState('');
    const isFirstRunSearch = useRef(true);


    useEffect(() => fetchBooks(dispatch), [dispatch]);

    useEffect(() => {
        if (!books.length) return;

        setCloneBooks(books);
    }, [books]);

    useEffect(() => setCurrentData(cloneBooks.slice(offset, offset + pageLimit)), [offset, cloneBooks]);

    useEffect(() => {

        if (!books.length) return;

        if (books.length && isFirstRunSearch.current) {
            isFirstRunSearch.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setCurrentPage(1);
            setOffset(0);

            search
                ? setCloneBooks(books.filter(item => item.list_name.toLowerCase().indexOf(search.toLowerCase()) > -1))
                : setCloneBooks(books)
        }, 200);

        return () => clearTimeout(timer);

    }, [search, books]);

    if (loading) return <Loading/>;
    if (error) return <Error/>;

    return (
        <div className="row">
            <Tools length={cloneBooks.length}
                   currentPage={currentPage}
                   pageLimit={pageLimit}
                   search={search}
                   setCurrentPage={setCurrentPage}
                   setOffset={setOffset}
                   setSearch={setSearch}
            />
            <BooksList books={currentData}/>
        </div>
    )
};

export default BooksPage;