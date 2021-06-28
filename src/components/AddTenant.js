import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import tenantSchema from '.././utils/tenantSchema';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
  apartment: '',
  tenant_name: '',
  tenant_email: '',
  tenant_phone: '',
  tenant_occupation: '',
}

const initialFormErrors = {
    apartment: '',
    tenant_name: '',
    tenant_email: '',
    tenant_phone: '',
    tenant_occupation: '',
}

const AddTenant = () => {
  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const handleChange = e => {
    yup.reach(tenantSchema, e.target.name)
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
    tenantSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleSubmit = e => {
    e.preventDefault();
    const newTenant = {
      apartment: formValues.apartment.trim(),
      tenant_name: formValues.tenant_name.trim(),
      tenant_email: formValues.tenant_email.trim(),
      tenant_phone: formValues.tenant_phone.trim(),
      tenant_occupation: formValues.tenant_occupation.trim(),
    }

    axiosWithAuth().post('https://altrest-app.herokuapp.com/api/tenants', newTenant)
      .then(res => {
        console.log(res)
        push('/tenantlist')
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <section>
      <section className="form_section2">
        <h1>Add Tenant</h1><br />
        <form onSubmit={handleSubmit}>
          <div className="form-group form-label mb-3">
            <label htmlFor="apartment">Apartment No:</label>
            <input className="form-control" onChange={handleChange} value={formValues.apartment} name="apartment" id="apartment" placeholder="No" />
          </div>
          <p className='errors'>{formErrors.tenant_apartment}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="tenant_name">Name:</label>
            <input className="form-control" onChange={handleChange} value={formValues.tenant_name} name="tenant_name" id="tenant_name" placeholder="Tenant Fullname" />
          </div>
          <p className='errors'>{formErrors.tenant_name}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="tenant_email">Email Address:</label>
            <input className="form-control" onChange={handleChange} value={formValues.tenant_email} name="tenant_email" id="tenant_email" placeholder="Tenant Email Address" />
          </div>
          <p className='errors'>{formErrors.tenant_email}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="tenant_phone">Phone Number:</label>
            <input className="form-control" onChange={handleChange} value={formValues.tenant_phone} name="tenant_phone" id="tenant_phone" placeholder="Tenant Phone Number" />
          </div>
          <p className='errors'>{formErrors.tenant_phone}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="tenant_occupation">Occupation:</label>
            <input className="form-control" onChange={handleChange} value={formValues.tenant_occupation} name="tenant_occupation" id="tenant_occupation" placeholder="Tenant Occupation" />
          </div>
          <p className='errors'>{formErrors.tenant_occupation}</p>
          <br />
          <button disabled={disabled}>Add Tenant</button>
        </form>
      </section>
    </section>
  );
}

export default AddTenant;
