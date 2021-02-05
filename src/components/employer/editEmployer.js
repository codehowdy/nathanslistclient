import React, { useState, useEffect } from 'react';

import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Redirect, useHistory } from "react-router-dom";

const editEmployer = (props) => {
    console.log('edit employer token -->', props.token)
    const [employerTitle, setEmployerTitle] = useState('');
    const [employerCategory, setEmployerCategory] = useState('');
    const [employerEntry, setEmployerEntry] = useState('');
    const [editedEmployer, setEditedEmployer] = useState(false);
    const { buttonLabel, className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const submitEditEmployer = (e) => {
    e.preventDefault();
    console.log(props);
    console.log('edit employer ran', props.employerId)
    fetch(`http://localhost:3001/employer/${props.employerId}`, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        }),
        body: JSON.stringify({
            "employer": {
                "title": employerTitle,
                "category": employerCategory,
                "entry": employerEntry,
            }
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        setEditedEmployer(true);
        window.location.reload(false);
    })
    .catch(error => console.log('error', error));
}


return (
    <div>
        <Button class="employer-button" onClick={toggle}>Edit Employer </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            {
                editedEmployer === true ?
                    <div>
                        <h3>Thank you!</h3>
                        <p>The Employer has been edited. </p>
                    </div>
                    :
                    <div>
                        <h3 className="current-module">Edit Employer</h3>
                        <Form onSubmit={submitEditEmployer}>
                            <FormGroup>
                                <Label for="title"> </Label>
                                <Input type="text" name="title" id="Employer-title-entry" required placeholder="placeholder" onChange={(e) => setEmployerTitle(e.target.value)} />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="category"> </Label>
                                <Input type="text" name="category" id="Employer-category-entry" required placeholder="placeholder" onChange={(e) => setEmployerCategory(e.target.value)} />
                            </FormGroup>


                            <FormGroup>
                                <Label for="entry"></Label>
                                <Input type="textarea" name="entry" id="employer-entry" required placeholder="placeholder" onChange={(e) => setEmployerEntry(e.target.value)} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </div>
            }
        </Modal>
    </div>
    )}
export default editEmployer;