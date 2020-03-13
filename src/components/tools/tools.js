import React from "react";
import "./tools.css";

import Paginator from 'react-hooks-paginator';

const Tools = ({search, setSearch, length, pageLimit, setOffset, currentPage, setCurrentPage}) => {
    return (
        <div className="tools col-12">
            <div className="row">

                <div className="input-group">
                    <input type="search"
                           className="form-control"
                           onChange={(e) => setSearch(e.target.value)} value={search}/>
                </div>

                <Paginator
                    totalRecords={length}
                    pageLimit={pageLimit}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
};

export default Tools;