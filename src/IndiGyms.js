import {React, useState} from "react";
import { Link } from 'react-router-dom'
import UpdateGymForm from './UpdateGymForm';
function IndiGyms({gym, updateGym, deleteGym}){

    const [updateButton, setUpdateButton] = useState(false)

    function toggle(){
        setUpdateButton(!updateButton)
    }

    console.log(gym.id)
    
    function handleDelete(){
        fetch(`http://localhost:9292/gyms/${gym.id}`, {
            method: "DELETE" ,
        })
        deleteGym(gym.id)
    }
    
    
    return(
        <div className='gymCard'>
            <h2>Name: {gym.name}</h2>
            
            <img src={gym.image_url} alt={'Not Found'} className="img" />
            <h3>Location: {gym.location}</h3>
            <h3>Number of Gyms: {gym.number_of_gyms}</h3>
            <h3>Membership Price: ${gym.membership_price}.00</h3>
            <Link to={`/gyms/${gym.id}/reviews/`}>
                <button className='reviewBtn'> Reviews </button>
            </Link>
            <button onClick={toggle}>{updateButton ? 'Hide Update Form' : 'Update Form'}</button>
            {updateButton ? <UpdateGymForm gym={gym} updateGym={updateGym} toggle={toggle}/> : null}
            <button className="button" onClick={handleDelete}> Delete </button>
        </div>
    )
}

export default IndiGyms

