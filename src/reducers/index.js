import books from "./books";
import favoritesBooks from "./favorites-books";

const reducer = (state, action) => ({
    books: books(state, action),
    favoritesBooks: favoritesBooks(state, action)
});

export default reducer;