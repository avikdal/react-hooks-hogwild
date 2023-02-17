import React from "react";

function Greased({ greasedFilter, handleGreaseFilter }){

    return(
        <button onClick={handleGreaseFilter}>{greasedFilter ? "Show All Pigs" : "Greased Pigs"}</button>
    )
}

export default Greased