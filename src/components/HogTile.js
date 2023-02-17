import React, { useState } from "react";

function HogTile ({ name, picture, specialty, weight, greased, medal }){
    const [clicked, setClicked] = useState(false)

    const handleClick = () => setClicked(!clicked)

    return(
        <div className="ui grid container">
            <div className="ui eight wide column pigTile" onClick={handleClick}>
                <div> 
                    <img src={picture} alt="pretty piggy" className="maxPigTile"></img>
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
                {clicked ? 
                    <div className="hoggyText">
                        <p>Specialty: {specialty}</p>
                        <p>Weight: {weight}</p>
                        <p>Greased: {greased.toString()}</p>
                        <p>Highest Medal Achieved: {medal}</p>
                    </div> 
                : null }
            </div>
        </div>
    )
}

export default HogTile