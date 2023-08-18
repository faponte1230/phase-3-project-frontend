import React from "react";
import IndiGyms from "./IndiGyms";

function GymList({gyms , deleteGym, updateGym}){
    
    let displayGyms = gyms.map( g => {
        return(
           <IndiGyms key={g.id} gym={g} deleteGym={deleteGym} updateGym={updateGym} />
        )
    })

    return(
        <div className='home'>
            {displayGyms}
        </div>
    )
}

export default GymList