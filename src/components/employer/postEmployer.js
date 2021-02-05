import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FromText } from 'reactstrap';
const postEmployer = (props) => {
    console.log('employer token -->', props.token)

    const [employerTitle, setEmployerTitle] = useState('');
    const [employerCategory, setEmployerCategory] = useState('');
    const [employerEntry, setEmployerEntry] = useState('');
    const [submittedEmployer, setSubmittedEmployer] = useState(false);

    const submitEmployer = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/employer/", {
            method: 'POST',
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
                setSubmittedEmployer(true);
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            {
                submittedEmployer === true ?
                    null
                    :
                    <div>
                        <h3>Create Employer</h3>

                        <Form onSubmit={submitEmployer}>
                            <FormGroup>
                                <Label for="title"> </Label>
                                <Input type="text" name="title" id="employer-title-entry" required placeholder="please enter an employer" onChange={(e) => setEmployerTitle(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category"> </Label>
                                <Input type="text" name="category" id="employer-category-entry" required placeholder="please enter a category" onChange={(e) => setEmployerCategory(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="entry"> </Label>
                                <Input type="textarea" name="entry" id="employer-entry-entry" required placeholder="please expand on your role" onChange={(e) => setEmployerEntry(e.target.value)} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </div>
            }
        </div>
    )
}

export default postEmployer;