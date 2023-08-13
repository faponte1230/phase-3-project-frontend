import React from "react";
import Gym from './Gym';
//import GymForm from "./GymForm";
//import UpdateGym from "./UpdateGym";

function GymList({ addGym, gyms , updateGym , deleteGym}){
    
    let displayGyms = gyms.map( g => {
        return(
           <Gym key={g.id} gym={g} deleteGym={deleteGym} />
        )
    })

    return(
        <div className='home'>
            <div className='nav'>
                
                <br></br>
                <h1>add gym form</h1>
                <br></br>
                <h1>add update gym</h1>
            </div>
            {displayGyms}
        </div>
    )
}

export default GymList