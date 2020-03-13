import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import store from "./store";

import BooksPage from "./pages/books";
import FavoritesPage from "./pages/favorites";
import Nav from "./components/nav";
import Toast from "./components/toast";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Router>
                    <Toast />
                    <Nav />
                    <Switch>
                        <Route path="/" component={BooksPage} exact/>
                        <Route path="/favorites" component={FavoritesPage}/>
                    </Switch>
                </Router>
            </div>
        </Provider>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
