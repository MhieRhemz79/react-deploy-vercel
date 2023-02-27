import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignImage from './sign_img';
import { Link } from 'react-router-dom';
const Home = () => {

    const [inpval, setInpval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    });

    const [data, setData] = useState([]);

    const getdata = (e) => {

        const {value, name} = e.target;

        // console.log(value,name);

        setInpval( () => {
            return {
                ...inpval,
                [name]:value                
            }   
        })        
    }

    const addData = (e) => {
        e.preventDefault();

        const {name, email, date, password} = inpval;

        if(name === ""){
            alert('Name field is required!');
        }else if(email===""){
            alert("Email field is required!");
        }else if(!email.includes("@")){
            alert("Please enter valid Email address!");
        }else if(date===""){
            alert("Date field is required!");
        }else if(password===""){
            alert("Password field is required!");            
        }else if(password.length < 8){
            alert("Password must be at least 8 characters long!");
        } else{
            alert("Data successfully added!");

            // Save Data to Local Storage
            localStorage.setItem("mensahe", JSON.stringify([...data,inpval]));
            
        }
    }

  return (
    <div className="container mt-3">
        <section className="d-flex justify-content-between">
            <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                <h3 className='text-center col-lg-6'>Sign Up</h3>
                <Form>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                        <Form.Control type="name" onChange={getdata} name="name" placeholder="Enter your name" />                        
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />                        
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicBday">
                        <Form.Control type="date" onChange={getdata} name="date" placeholder="Enter your birth date" />                        
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                        <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" className="col-lg-6" style={{background:"rgb(67,185,127)", border:"none"}} type="submit" onClick={addData}>
                        Submit
                    </Button>
                </Form>
                
                <p className='mt-3'>Already Have an Account <span><Link to="/sign_in">Sign In</Link></span> </p>
            </div>
           
            <SignImage></SignImage>

        </section>
    </div>

   
  );
}

export default Home;