import React, {useState} from 'react';
import {Button } from 'reactstrap';
import CreateReview from './CreateReview';
import ViewReview from './ViewReview';
import viewEmployer from '../employer/viewEmployer'

const review = (props) => {

    const [reviewEmployer, setReviewEmployer] = useState(false)

    const clickReviewEmployer = () => {
        setreviewEmployer(true)
    }
    
    const clickViewReview = () => {
        setReviewEmployer(false)
    }
    

    return (
        <div>
            <h2>Review </h2>
            {/}
            {
            
                reviewEmployer === false

                    ?
                        <div>
                        <Button onClick={clickReviewEmployer}>Review this employer.</Button>
                        <CreateReview token={props.token}/> 
                        </div>
                    :
                        <div>
                            <Button onClick={clickViewReview}>View all reviews for this employer.</Button>
                        <ViewReview token={props.token}/>
                        </div> 
            }
        </div>
    )
}

export default Review;