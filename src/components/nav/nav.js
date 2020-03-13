import React from "react";
import "./nav.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="nav nav-pills mt-2 mb-2">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>All books</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">My Favorites Book</NavLink>
            </li>
        </ul>
    )
};

export default Nav;