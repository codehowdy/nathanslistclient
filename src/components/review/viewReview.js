import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DisplayReviews from './displayreviews';

const ViewAnswer = (props) => {

    const { buttonLabel, className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [reviewResponses, setreviewResponses] = useState([]);
    
    useEffect(() => {
        if(reviewResponses != []) {
            setReviewResponses([]);
        }
    }, [])


    const getReviews = (props) => {
            // e.preventDefault();

            console.log('Id in the get answer fetch', props.reviewId)

            fetch(`http://localhost:3000/reviews/reviews/${props.employerId}`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
                .then(response => response.json())
                .then(allreviews => {
                    console.log(allreviews)
                    setReviewResponses(allreviews);
                    console.log('show review for employer', reviewResponses)

                })
                .catch(error => console.log('error', error));
        }
    
    return (
        <div>
            <Button class="employer-button" onClick={ ()=> {
                toggle();
                getReviews(props);
            }}> 
            View Reviews
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Answers</ModalHeader>
                <ModalBody>
                    <DisplayAnswers answerResponses={reviewResponses} />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ViewResponses;