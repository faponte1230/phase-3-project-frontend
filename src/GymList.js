import React from "react";
import IndiGyms from "./IndiGyms";
import GymForm from "./GymForm";
import UpdateGymForm from "./UpdateGymForm";
function GymList({ addGym, gyms , updateGym , deleteGym}){
    
    let displayGyms = gyms.map( g => {
        return(
           <IndiGyms key={g.id} gym={g} deleteGym={deleteGym} />
        )
    })

    return(
        <div className='home'>
            <div className='nav'>
                
                <br></br>
                <GymForm addGym={addGym} />
                <br></br>
                <UpdateGymForm updateGym={updateGym}/>
            </div>
            {displayGyms}
        </div>
    )
}

export default GymList