import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { useHistory } from "react-router-dom";

type AppStates = {
    sessionToken: string
    value: number;
    setValue: (newValue: number) => this.setState({value:newValue}),
}

class APP extends React.Component<{}, AppStates> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: 0,
            setValue: (newValue: number) => this.setback({value: newValue}),
        }
    }

render() {

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



}