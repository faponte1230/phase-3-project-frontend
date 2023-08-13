import React from "react";

function Review({review, gym_id, deleteReview}){

    console.log(review)

    function onDelete(id){
        fetch(`http://localhost:9292/gyms/${gym_id}/reviews/${id}`, {
            method: 'DELETE'
        })
        deleteReview(review)
    }

    return(
        <div className="review">
            <h2>Title: {review.title}</h2>
            <h3>Body: {review.body}</h3>
            <h3>Rating: {review.rating}</h3>
            <button onClick={() => onDelete(review.id)}>Delete Review</button>
            <br></br>
        </div>
    )
}

export default Review