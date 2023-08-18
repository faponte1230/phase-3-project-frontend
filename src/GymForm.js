import React, { useState } from "react";


function GymForm({addGym}){

    const [newGym, setNewGym] = useState({
        name: '',
        image_url: '',
        location: '',
        number_of_gyms: '',
        membership_price: ''
    })

    function handleChange(e){
        const name = e.target.name
        let val = e.target.value
        setNewGym({
            ...newGym,
            [name]: val
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(newGym)

        let gymToAdd = {
            name: newGym.name,
            image_url: newGym.image_url,
            location: newGym.location,
            number_of_gyms: newGym.number_of_gyms,
            membership_price: newGym.membership_price
        }
        fetch('http://localhost:9292/gyms',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(gymToAdd)
        })
        .then( r => r.json())
        .then( gymObj => addGym(gymObj))
        
        setNewGym({
            name: '',
            image_url: '',
            location: '',
            number_of_gyms: '',
            membership_price: ''
        })
        
    }

    return(
        <div className='nav'>
            
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={newGym.name} placeholder='Enter Name' onChange={handleChange}></input>
                <input type='text' name='image_url' value={newGym.image_url} placeholder='Enter Image URL' onChange={handleChange}></input>
                <input type='text' name='location' value={newGym.location} placeholder='Enter Location' onChange={handleChange}></input>
                <input type='text' name='number_of_gyms' value={newGym.number_of_gyms} placeholder='Enter # of Gyms' onChange={handleChange}></input>
                <input type='text' name='membership_price' value={newGym.membership_price} placeholder='Enter Price ' onChange={handleChange}></input>
                <input type='submit' name='submit' value='Add Gym'></input>
            </form>
            <br></br>
        </div>
    )
}

export default GymForm