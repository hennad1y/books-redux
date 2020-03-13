import {FETCH_BOOKS_ERROR, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS} from "../types";

const booksRequest = () => ({type: FETCH_BOOKS_REQUEST});
const booksSuccess = (books) => ({type: FETCH_BOOKS_SUCCESS, payload: books});
const booksError = (error) => ({type: FETCH_BOOKS_ERROR, payload: error});

const fetchBooks = (dispatch) => {
    dispatch(booksRequest());

    fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=KcsZu4YtlhrXr8RCTsZcSr0sazvPFNOR')
        .then(res => res.json())
        .then(data => dispatch(booksSuccess(data.results.lists)))
        .catch(error => dispatch(booksError(error.message)))

};

export {
    fetchBooks
}
