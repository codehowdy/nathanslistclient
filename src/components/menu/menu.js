import React, { useState } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Main from '../Body/Main';

const Menu = (props) => {
    return (
        <Router>
            <div className="menu">
                    <Button><Link to="/">Home</Link></Button>
                    <Button><Link to="/signup">Sign Up</Link></Button>
                    <Button><Link to="/signin">Sign In</Link></Button>
                    <Button onClick={props.clickLogout}>Logout </Button>

            </div>
            <div className="menu-route">
                <Switch>
                    <Route exact path="/"> </Route>
                    <Route exact path="/signup"><SignUp token={props.sessionToken} reviseToken={props.reviseToken} /></Route>
                    <Route exact path="/signin"><SignIn token={props.sessionToken} reviseToken={props.reviseToken} /></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Menu; 