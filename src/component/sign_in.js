import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imgPict from '../image/image_processing20201123-31387-1z06scn.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sign_in = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useNavigate();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inpval, setInpval] = useState({       
        email:"",
        password:""
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);

    const getData = (e) => {

        const {value, name} = e.target;
        console.log(value, name);

        setInpval( () => {
            return {
                ...inpval,
                [name]:value                
            }   
        })        
    }

    const addData = (e) => {
        e.preventDefault();
        
        // Get Data from Local Storage
        const getUserArr = localStorage.getItem("mensahe");

        const {email, password} = inpval;

        if (email ==="") {
            alert("Email field is required!");
        } else if(!email.includes("@")){
            alert("Please enter valid email address!")
        } else if(password === ""){
            alert("Password field is required!");
        } else if(password.length < 8){
            alert("Password must be at least 8 characters long!");
        }else{
            if( getUserArr && getUserArr.length){

                const userdata = JSON.parse(getUserArr);
                
                const userlogin = userdata.filter((el, k)=>{
                    return el.email === email && el.password === password
                });
                
                if(userlogin.length === 0){
                    alert("Password Incorrect!");
                }else{
                    
                    alert("Login successful!");

                    localStorage.setItem('user_login',JSON.stringify(userlogin));

                    history('/welcome');
                }
            }else{
                alert("No data found! Please Sign Up first!");
            }
        }

    }

  return (
    <>
        <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                    <h3 className='text-center col-lg-6'>Sign IN</h3>
                    <Form>
                    
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="email" onChange={getData} name="email" placeholder="Enter Email Address" />                        
                        </Form.Group>
                    
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control type="password" onChange={getData} name="password" placeholder="Enter Password" />
                        </Form.Group>

                    
                        <Button variant="primary" className="col-lg-6" style={{background:"rgb(67,185,127)", border:"none"}} type="submit" onClick={addData}>
                            Submit
                        </Button>
                    </Form>
                        
                    <p className='mt-3'>Create an Account <span><Link to="/">Sign Up</Link></span> </p>
                </div>
            
                <div className="rigth_data" style={{width:"100%"}}>
                    <div className="sign_img">
                        <img src={imgPict} style={{maxWidth:400}} alt="" />
                    </div>
                </div>
            

            </section>
        </div>
    </>



  )
}

export default sign_in