import React, { useState, EFf, useEffect } from 'react';
import review from '../review/review'  ; 
import { } from 'reactstrap';
import employerCard from './employerCard';

const ViewEmployer = (props) => {
    console.log('VIEWING Employer', props)
   

    const [ employerRes, setemployerRes ] = useState( [ ] );



    useEffect(() => {

        const fetchEmployer = (e) => {
            // e.preventDefault();
    
            fetch("http://localhost:3001/employer/", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
                .then(response => response.json())
                .then(result => {

                    setEmployerRes(result);

                    console.log('set employer res -->'. employerRes);

                    console.log('view employer---->', result)

                    
                    
                })
                .catch(error => console.log('error', error));
        }
    
        fetchEmployer();


    }, [])
   

    return (
        <div>
            <h3 className="current-module"></h3>
            <employerCard questionRes={questionRes} token={props.token} />
        </div>
    )
}

export default ViewEmployer;