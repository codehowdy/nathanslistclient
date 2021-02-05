import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { Redirect, useHistory } from "react-router-dom";



export const SignIn = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    console.log('status login', userLoggedIn)

    async function signInUser(event) {
        event.preventDefault();
        console.log('testing sign in ')

        await fetch("http://localhost:3000/user/signin", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ username: username, password: password }),
        })
            .then(response => response.json())
            .then(result => {

                props.reviseToken(result.sessionToken)
                console.log('sign in completed')

                setUserLoggedIn(true);

                history.push('/');
                window.location.reload(true);

            })
            .catch(error => console.log('error', error));


        console.log('status login', userLoggedIn)

    }

    let history = useHistory();



    return (
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={signInUser}>
                <FormGroup>
                    <label for="username">Username</label>
                    <Input type="text" name="username" value={username} placeholder="enter username " minLength="4" required onChange={(e) => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <label for="password">password</label>
                    <Input type="password" name="password" value={password} placeholder="enter password" minLength="8" required onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default SignIn