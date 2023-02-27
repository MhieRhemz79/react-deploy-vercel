import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const welcome = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [logindata, setLoginData] = useState([]);
    
    // console.log(logindata);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useNavigate();

    const todayDate = new Date().toLocaleDateString();

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if ( getuser && getuser.length ) {
            const user = JSON.parse(getuser);
            setLoginData(user);                     
        }
    }

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history('/sign_in');
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        Birthday();
    }, [])


  return (
    

    <>
        {
            logindata.length === 0 ? <h4>Session Ended</h4> :  
            <>          
                <Navbar>
                    <Container>
                        <Navbar.Brand>Welcome to MENSAHE!</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: {logindata[0].name} | <Button onClick={userlogout}>Log Out</Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>      
            </>
        }

    </>
    
  )
}

export default welcome
