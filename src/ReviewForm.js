import React, { useState} from "react";


function ReviewForm({addNewReview , gym_id}){
    
   

    //fix
    const [newReview, setNewReview] = useState({
        title: '',
        body: '',
        rating: '',
        gym_id: gym_id
    })

    

    function handleChange(e){
        const key = e.target.name
        
        setNewReview({
            ...newReview,
            [key]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()


        fetch(`http://localhost:9292/gyms/${gym_id}/reviews`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then( (resp) => resp.json())
        .then( (newReviewObj) => addNewReview(newReviewObj))
        
        setNewReview({
            title: '',
            body: '',
            rating: '',
            gym_id: gym_id
        })
    }

    /*function reviewPreview(newReview){
        console.log(newReview)
    }*/

    return(
        <div className='form'>
            <h4> Add a New Review </h4>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' value={newReview.title} placeholder='title' onChange={handleChange}></input>
                <input type='text' name='body' value={newReview.body} placeholder='body' onChange={handleChange}></input>
                <select name='rating' onChange={handleChange}>
                    <option value=' '></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>    
                
                <input type='submit' name='submit' value='Add Review'></input>
            </form>
        </div>
    )

    
}
                

export default ReviewForm