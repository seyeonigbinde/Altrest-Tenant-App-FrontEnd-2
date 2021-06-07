import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from '../utils/formSchema';
import axios from 'axios';

const initialFormValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: '',
  }
  
  const initialFormErrors = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role:'',
  }

const Signup = (props) => {
    const { push } = useHistory();

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)

    const handleChange = e => {
        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then( () => {
          setFormErrors({ ...formErrors, [e.target.name]: '' })
        })
        .catch( err => {
          setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] })
        })
        
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })

    }

    useEffect(() => {
        formSchema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);

    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            firstName: formValues.firstName.trim(),
            lastName: formValues.lastName.trim(),
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            role: formValues.role.trim(),
          }
      
          axios.post('https://tt16-secret-recipes.herokuapp.com/api/auth/register', newUser)
            .then( res => {
              console.log(res)
              push('/login')
            })
            .catch( err => {
              console.log(err)
            }) 
        }


    return(
    
    <div className="form_section">
        <h1>Create Account</h1><br/>
        <p>Enter your information below to continue</p><br/>
        <form onSubmit={handleSubmit}>
            <div className="form-group form-label mt-3">
                <label htmlFor="firstName">First Name:</label>
                <input className="form-control" onChange={handleChange} value={formValues.firstName} name="firstName" id="firstName"  placeholder ="First Name" />
            </div>
            <p className='errors'>{formErrors.firstName}</p>
            <div className="form-group form-label mt-3">
                <label htmlFor="lastName">Last Name:</label>
                <input className="form-control" onChange={handleChange} value={formValues.lastName} name="lastName" id="lastName"  placeholder ="Last Name" />
            </div>
            <p className='errors'>{formErrors.lastName}</p>
            <div className="form-group form-label mt-3">
                <label htmlFor="username">Username:</label>
                <input className="form-control" onChange={handleChange} value={formValues.username} name="username" id="username"  placeholder ="Username" />
            </div>
            <p className='errors'>{formErrors.username}</p>
            <div className="form-group form-label mt-3">
                <label htmlFor="email">Email Address:</label>
                <input className="form-control" onChange={handleChange} value={formValues.email} name="email" id="email"  placeholder ="Email Address" />
            </div>
            <p className='errors'>{formErrors.email}</p>
            <div className="form-group form-label mt-3">
                <label htmlFor="password">Password:</label>
                <input className="form-control" onChange={handleChange} value={formValues.password} name="password" id="password" type="password"   placeholder ="Password" />
                <p className='errors'>{formErrors.password}</p>
                {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
            </div>
            <div className="form-group mt-3">
            <select className="form-select" value={formValues.role} name="role" onChange={handleChange} >
            		<option value="">-- Select a role --</option>
            	    <option value="1">Landlord</option>
            		<option value="2">Tenant</option>
            		<option value="3">Community Resident</option>
					<option value="4">Service Provider</option>
          	</select>
              <p className='errors'>{formErrors.role}</p>
            </div>
            {/* {
                props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
            } */}
            <button disabled={disabled}>Create Account</button>
        </form><br/>
            <p className="signup_login"> Already have an account? <Link to="/login">Login</Link></p>
    </div>
    );
}
  
  export default Signup;



 