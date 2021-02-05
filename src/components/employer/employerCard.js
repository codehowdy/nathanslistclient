import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CardBody, Card } from 'reactstrap';
import CreateEmployer from './postEmployer';
import ViewEmployer from './VieweEmployers';
import EditEmployer from './EditEmployer';

const employerCard = (props) => {

    const [readyToReview, setReadyToReview] = useState(false);
    const [selectEmployerId, setSelectedEmployerId] = useState('');


    return (
        <div>
            { props.questionRes.map(question => {

                console.log('employer card', question)

                return (

                    <div key={employer.id} className="questioncard">
                        <h5>Title:</h5>
                        <h7>  {employer.title} </h7>
                        <h5>Category:</h5>
                        <h7>{employer.category} </h7>
                        <h5>Tell us who you worked for?</h5>
                        <p>{Employer.entry} </p>
                        <br></br>
                        <div className="employerButtonMenu">
                            <CreateEmployer token={props.token} employerid={employer.id} />
                            <br></br>
                            <ViewEmployer token={props.token} employerid={employer.id} />
                            <br></br>
                            <br></br>
                            <EditEmployer token={props.token} employerid={employer.id} />
                            {/* <Button class="question-button">Delete employer </Button> */}
                        </div>
                    </div>
                )

            }
            )
            }
                    </div>
                )
            }

export default employerCard