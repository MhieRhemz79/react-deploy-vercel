function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; 
    // (Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
    
    if( values.email === ""){
        error.email="Name shoud not empty";
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email did not match";
    }
    if(values.password===""){
        error.password = "Password shoud not empty";        
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password must be minimum of eight characters, at least one uppercase letter, one lowercase letter and one number";
    }
     
    else if(values.confirPassword === "" || String(values.password) !== String(values.confirmPassword)) {
        error.confirmPassword = "Password not matched";
    }
    return error;

}

export default Validation;