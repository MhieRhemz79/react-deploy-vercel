import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import validation from './Validation'


export default function SignupForms() {
  
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    function handleValidation(e){
        e.preventDefault();
        setErrors(validation(values))
    }


    return (
      
    <div className="signup_container w-100 d-flex justify-content-center mt=5">
        <div className="signup_form mt-5 w-50  ">
            <h3>Sign-Up Form Validation</h3>
            <div className="form mt-3">
                <form className="border p-3" onSubmit={handleValidation}>
                    <label htmlFor=""><strong>Email:</strong></label>
                    <input type="email" name="email" id="email" placeholder="Enter E-Mail" onChange={handleInput} className="form-control" />
                    {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                
                    <label htmlFor="password" className='mt-2'><strong>Password:</strong></label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" onChange={handleInput} className="form-control" />
                    {errors.password && <p style={{color:'red'}}>{errors.password}</p>}

                    <label htmlFor="confirm password" className='mt-2'><strong>Confirm Password:</strong></label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter confirm password" onChange={handleInput} className="form-control" />   
                    {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword}</p>}

                    <div className="mt-3">
                        <button className="btn btn-danger w-50"> Cancel </button>
                        <button className="btn btn-success w-50"> Signup </button>
                    </div>                 

                </form>
            </div>
        </div>
    </div>
  )
}
