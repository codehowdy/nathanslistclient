import './App.css';
import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
//import employer from './components/employer';
//import review from './components/review'
//import signUp from './components/menu/signUp';


function App() {

  const [sessionToken, setSessionToken] = useState('');
  const [owner, setOwner] = useState('');
  const [userID, setUserId] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  async function reviseToken(newToken) {

    setSessionToken(newToken);

    console.log('View setSessionToken ---> ', newToken);
    console.log('View sessionToken ---> ', newToken);

    localStorage.setItem('token', newToken);

    console.log('View token ---->', localStorage.token)

  }

  async function clearToken() {
    console.log('cleared Session Token ---> ', sessionToken);

    await setSessionToken('');
    localStorage.clear();

    console.log('Confirm token is cleared ---->', localStorage.token)
  }

  const protectedViews = (props) => {

    return (sessionToken === localStorage.getItem('token') ? <Question token={sessionToken} />
     : <p id="tokenissue">Sign Up or Sign In to View</p>)

  }

  return (

    <div>
      <Container>
        <Row>
          <Router>
            <Menu> clickLogout={clearToken} token={sessionToken} reviseToken={reviseToken} />
          </Router>
        </Row>
        <Row>      
          {protectedViews()}
        </Row>

      </Container>


      
    </div>

  );
}

export default App;
