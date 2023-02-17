import React from "react";
import HogTile from "./HogTile"

const HogTilesList = ({ hogs, greasedFilter }) =>{
    const hogTiles = hogs.filter((hog) => greasedFilter ? hog.greased === true : hog).map((hog) => { 
        return (
        <HogTile 
            key={hog.name} 
            name={hog.name} 
            picture={hog.image}
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            medal={hog["highest medal achieved"]}
        /> )
        })


    return (
        <div>
            {hogTiles}
        </div>
    )
}

export default HogTilesList