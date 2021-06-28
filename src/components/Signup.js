import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from '../utils/formSchema';
import axios from 'axios';

import altrestlogo2 from '../images/altrestlogo2.png';
import DashFooter from './DashFooter';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  location: '',
  password: '',
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  location: '',
  password: '',
}

const Signup = () => {
  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const handleChange = e => {
    yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({ ...formErrors, [e.target.name]: '' })
      })
      .catch(err => {
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
      email: formValues.email.trim(),
      phone: formValues.phone.trim(),
      address: formValues.address.trim(),
      location: formValues.location.trim(),
      password: formValues.password.trim(),
    }

    axios.post('https://altrest-app.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        console.log(res)
        push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <section>
      <header>
        <div className="logo">
          <Link to='/'><img src={altrestlogo2} alt="logo" /></Link>
        </div>
      </header>
      <section className="form_section">
        <h1>Create Account</h1><br />
        <form onSubmit={handleSubmit}>
          <div className="form-group form-label mt-3">
            <label htmlFor="firstName">First Name:</label>
            <input className="form-control" onChange={handleChange} value={formValues.firstName} name="firstName" id="firstName" placeholder="First Name" />
          </div>
          <p className='errors'>{formErrors.firstName}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="lastName">Last Name:</label>
            <input className="form-control" onChange={handleChange} value={formValues.lastName} name="lastName" id="lastName" placeholder="Last Name" />
          </div>
          <p className='errors'>{formErrors.lastName}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="email">Email Address:</label>
            <input className="form-control" onChange={handleChange} value={formValues.email} name="email" id="email" placeholder="Email Address" />
          </div>
          <p className='errors'>{formErrors.email}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="email">Phone Number:</label>
            <input className="form-control" onChange={handleChange} value={formValues.phone} name="phone" id="phone" placeholder="Phone Number" />
          </div>
          <p className='errors'>{formErrors.phone}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="email">Address:</label>
            <textarea className="form-control" onChange={handleChange} value={formValues.address} name="address"  rows="2" id="address" placeholder="House Address" />
          </div>
          <p className='errors'>{formErrors.address}</p>
          <div className="form-group mt-3">
            <select className="form-select" value={formValues.location} name="location" onChange={handleChange} >
              <option value="">-- Select Location --</option>
              <option value="Abuja">Abuja</option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nassarawa">Nassarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>
            <p className='errors'>{formErrors.location}</p>
          </div>
          <div className="form-group form-label mt-3">
            <label htmlFor="password">Password:</label>
            <input className="form-control" onChange={handleChange} value={formValues.password} name="password" id="password" type="password" placeholder="Password" />
            <p className='errors'>{formErrors.password}</p>
            {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
          </div>
          <div>
            <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
           I agree to ALTREST's terms of service and consent to ALTREST's privacy policy.
           </div>
          <br />
          {/* {
                props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
            } */}
          <button disabled={disabled}>Create Account</button>
        </form><br />
        <p className="signup_login"> Already have an account? <Link to="/login">Login</Link></p>
      </section>
      <DashFooter/>
    </section>
  );
}

export default Signup;



