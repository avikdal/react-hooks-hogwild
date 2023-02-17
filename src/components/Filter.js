import React from "react";
import Greased from "./Greased"
import SortBy from "./SortBy"

function Filter({ greasedFilter, handleGreaseFilter, hogsByName, handleSortChange }){
    return(
        <nav className="navWrapper">
            <Greased greasedFilter={greasedFilter} handleGreaseFilter={handleGreaseFilter}/>
            <SortBy hogsByName={hogsByName} handleSortChange={handleSortChange}/>
        </nav>
    )
}

export default Filter