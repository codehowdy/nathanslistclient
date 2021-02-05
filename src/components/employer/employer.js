import React, { useState } from 'react';
import { Button } from 'reactstrap';
import postEmployer from './postEmployer';
import ViewEmployer from './ViewEmployer';


const employer = (props) => {
    // console.log(props.token)

    const [askEmployer, setAskEmployer] = useState(false)

    const clickAskEmployer = () => {
        setAskEmployer(true)
    }
    const clickViewEmployer = () => {
        setAskEmployer(false)
    }

    return (
        <div className="jumbotron">
            
            {
                
                askEmployer === false

                    ?
                        <div>
                            <Button onClick={clickAskEmployer}>Do you want to add an employer? </Button>
                            <ViewEmployer token={props.token} />
                        </div>
                    
                    :

                        <div>
                        
                            <Button onClick={clickViewEmployer}>Do you want to view the Employer? </Button>
                            <CreateEmployer token={props.token} />
                        </div>
            }
        </div>
    )
}

export default employer;