import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { Link, useParams } from 'react-router-dom';

function GymReviews({gyms, addNewReview, deleteReview}){
    
    const {gym_id}= useParams()

    const currentGym = gyms.find((gym) => gym.id == gym_id)
    console.log(currentGym)
    console.log(gym_id ,'param')
    //const { gymObj } = currentGym

    //console.log(currentGym)
    //console.log(currentGym.name)

    return(
        <div>
            <div className='gymCard'>
                <h2>Name: {currentGym.name}</h2>
                <h3>ID: {currentGym.id}</h3>
                <img src={currentGym.image_url} alt={'Not Found'} className="img" />
                <h3>Location: {currentGym.location}</h3>
                <h3>Number of Gyms: {currentGym.number_of_gyms}</h3>
                <h3>Membership Price: ${currentGym.membership_price}.00</h3>
            </div>

            <div>
                
                <br></br>
                <ReviewForm gym_id={gym_id} addNewReview={addNewReview} />
                <br></br>
                <h1>Gym Reviews</h1>
                {currentGym.reviews.map( (review) => { 
                    return (
                    <Review key={review.id} gym_id={gym_id} review={review} deleteReview={deleteReview} />
                    )
                })}
                
                    
            </div>
            
             <Link to='/'>Return to Gyms</Link>
            
        </div>
    )
}

export default GymReviews

/*



                    
                */