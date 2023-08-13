import React from "react";
import IndiGyms from "./IndiGyms";

function GymList({gyms , deleteGym}){
    
    let displayGyms = gyms.map( g => {
        return(
           <IndiGyms key={g.id} gym={g} deleteGym={deleteGym} />
        )
    })

    return(
        <div className='home'>
            {displayGyms}
        </div>
    )
}

export default GymList