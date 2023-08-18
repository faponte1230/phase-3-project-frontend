import React from "react";
import { useState } from "react";

function UpdateGymForm({gym, updateGym, toggle}){
    const [updatedGymForm, setUpdatedGymForm] = useState(
        {
            name: '',
            image_url: '',
            location: '',
            number_of_gyms: '',
            membership_price: ''
    })

    function handleChange(e){
        const name = e.target.name
        let val = e.target.value
        setUpdatedGymForm({
            ...updatedGymForm,
            [name]: val
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        let updatedGymData = {
            name: updatedGymForm.name,
            image_url: updatedGymForm.image_url,
            location: updatedGymForm.location,
            number_of_gyms: updatedGymForm.number_of_gyms,
            membership_price: updatedGymForm.membership_price
        }
        fetch(`http://localhost:9292/gyms/${gym.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedGymData)
        })
        .then(r => r.json())
        .then(newGymData => updateGym(newGymData))
        setUpdatedGymForm({
            name: '',
            image_url: '',
            location: '',
            number_of_gyms: '',
            membership_price: ''
        })
        toggle()
    }
    return(
        <div>
            <h1>Update Gym</h1>
            <div></div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={updatedGymForm.name} placeholder='Enter Name' onChange={handleChange}></input>
                <input type='text' name='image_url' value={updatedGymForm.image_url} placeholder='Enter Image URL' onChange={handleChange}></input>
                <input type='text' name='location' value={updatedGymForm.location} placeholder='Enter Location' onChange={handleChange}></input>
                <input type='text' name='number_of_gyms' value={updatedGymForm.number_of_gyms} placeholder='Enter # of Gyms' onChange={handleChange}></input>
                <input type='text' name='membership_price' value={updatedGymForm.membership_price} placeholder='Enter Price ' onChange={handleChange}></input>
                
                <input type='submit' name='submit' value='Update Gym'></input>
            </form>
            <br></br>
        </div>
    )
}

export default UpdateGymForm