import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import propertySchema from '.././utils/propertySchema'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialFormValues = {
  owner: '',
  property_address: '',
  property_city: '',
  property_state: '',
}

const initialFormErrors = {
  owner: '',
  property_address: '',
  property_city: '',
  property_state: '',
}

const PropertyForm = () => {
  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const handleChange = e => {
    yup.reach(propertySchema, e.target.name)
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
    propertySchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleSubmit = e => {
    e.preventDefault();
    const newProperty = {
      owner: formValues.owner.trim(),
      property_address: formValues.property_address.trim(),
      property_city: formValues.property_city.trim(),
      property_state: formValues.property_state.trim(),
    }

    axiosWithAuth().post('https://altrest-app.herokuapp.com/api/property', newProperty)
      .then(res => {
        console.log(res)
        push('/dashboard/propertylist')
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <section>
      <section className="form_section2">
        <h1>Add Property</h1><br />
        <form onSubmit={handleSubmit}>
          <div className="form-group form-label mt-3">
            <label htmlFor="owner">Owner's Name:</label>
            <input className="form-control" onChange={handleChange} value={formValues.owner} name="owner" id="owner" placeholder="Name" />
          </div>
          <p className='errors'>{formErrors.owner}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="property_address">Property Address:</label>
            <input className="form-control" onChange={handleChange} value={formValues.property_address} name="property_address" id="property_address" placeholder="Property Address" />
          </div>
          <p className='errors'>{formErrors.property_address}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="property_city">City:</label>
            <input className="form-control" onChange={handleChange} value={formValues.property_city} name="property_city" id="property_city" placeholder="City (e.g Lekki)" />
          </div>
          <p className='errors'>{formErrors.property_city}</p>
          <div className="form-group mt-3">
            <select className="form-select" value={formValues.property_state} name="property_state" onChange={handleChange} >
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
            <p className='errors'>{formErrors.property_state}</p>
          </div>
          <br />
          <button disabled={disabled}>Add Property</button>
        </form>
      </section>
    </section>
  )
}

export default PropertyForm
