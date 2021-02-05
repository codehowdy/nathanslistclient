import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { useHistory } from "react-router-dom";

export const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [userSignUp, setUserSignUp] = useState(false);

    async function signUpUser (event) {
        event.preventDefault();
        console.log('sign up ran')

        await fetch("http://localhost:3001/user/signup", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username : username, password: password }),
        })
            .then(response => response.json())
            .then(result => {
                
                props.reviseToken(result.sessionToken)
                
                console.log('sign up completed')

                setUserSignUp(true);

                history.push('/');
                window.location.reload(true);
            })
            .catch(error => console.log('error', error)); 

        
    }

    let history = useHistory();

    return (
        <div >
            <h1>Sign Up</h1>
            <Form onSubmit={signUpUser}>
                <FormGroup>
                    <label for="username">Username</label>
                    <Input  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Please enter letters and numbers. Minimum length is 8 characters." type="text" name="username" value={username} placeholder="enter username " minLength="8" required onChange={(e) => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <label for="password" >Password</label>
                    <Input type="password" name="password" value={password} placeholder="enter password" minLength="8" required onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default SignUp