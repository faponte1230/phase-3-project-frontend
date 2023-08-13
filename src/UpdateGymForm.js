import React from "react";
import { useState } from "react";

function UpdateGymForm({updateGym}){
    const [updatedGym, setUpdatedGym] = useState(
        {
            name: '',
            image_url: '',
            location: '',
            number_of_gyms: '',
            membership_price: '',
            updatingID: ''
    })

    function handleChange(e){
        const name = e.target.name
        let val = e.target.value
        setUpdatedGym({
            ...updatedGym,
            [name]: val
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        let updatedGymData = {
            name: updatedGym.name,
            image_url: updatedGym.image_url,
            location: updatedGym.location,
            number_of_gyms: updatedGym.number_of_gyms,
            membership_price: updatedGym.membership_price
        }
        fetch(`http://localhost:9292/gyms/${updatedGym.updatingID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedGymData)
        })
        .then(r => r.json())
        .then(newGymData => updateGym(newGymData))
        setUpdatedGym({
            name: '',
            image_url: '',
            location: '',
            number_of_gyms: '',
            membership_price: '',
            updatingID: ''
        })
    }
    return(
        <div>
            <h1>Update Gym</h1>
            <div></div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={updatedGym.name} placeholder='Enter Name' onChange={handleChange}></input>
                <input type='text' name='image_url' value={updatedGym.image_url} placeholder='Enter Image URL' onChange={handleChange}></input>
                <input type='text' name='location' value={updatedGym.location} placeholder='Enter Location' onChange={handleChange}></input>
                <input type='text' name='number_of_gyms' value={updatedGym.number_of_gyms} placeholder='Enter # of Gyms' onChange={handleChange}></input>
                <input type='text' name='membership_price' value={updatedGym.membership_price} placeholder='Enter Price ' onChange={handleChange}></input>
                <input type='text' name='updatingID' value={updatedGym.updatingID} placeholder='Gym ID' onChange={handleChange}></input>
                <input type='submit' name='submit' value='Update Gym'></input>
            </form>
            <br></br>
        </div>
    )
}

export default UpdateGymForm