import React from "react";

function SortBy({ hogsByName, handleSortChange }) {

    return(
        <select onChange={(e) => handleSortChange(e.target.value)}>
            <option>Sort By</option>
            <option>Name</option>
            <option>Weight</option>
        </select>
    )
}

export default SortBy