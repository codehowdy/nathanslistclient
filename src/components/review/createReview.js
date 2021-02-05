import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateReview = (props) => {
    console.log('review token -->', props.token)

    const [reviewTitle, setreviewTitle] = useState('');
    const [reviewEntry, setreviewEntry] = useState('');
    const [submittedReview, setSubmittedReview] = useState(false);
    
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    const submitReview = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/review/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                "answer": {
                    "title": reviewTitle,
                    "entry": reviewEntry,
                    "employerId": props.employerid
                }
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setSubmittedReview(true);
            })
            .catch(error => console.log('error', error));

    }


    return (
        <div>
            <Button class="employer-button" onClick={toggle}>Create Review </Button>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                {

                    submittedReview === true ?
                        <div>
                            <h3>Thank you!</h3>
                            <p>The Review was submitted. </p>
                        </div>
                        :
                        <div>
                            <h3 className="current-module">CreateReview</h3>

                            <Form onSubmit={submitReview}>
                                <FormGroup>
                                    <Label for="title"> </Label>
                                    <Input type="text" name="title" id="review-title-entry" required placeholder="Enter review here." onChange={(e) => setReviewTitle(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="entry"></Label>
                                    <Input type="textarea" name="entry" id="review-entry" required placeholder="Please submit your review here." onChange={(e) => setReviewEntry(e.target.value)} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </div>
                }
            </Modal>
        </div>


    )
}


export default CreateReview;