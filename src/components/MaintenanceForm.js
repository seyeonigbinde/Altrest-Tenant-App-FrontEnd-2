import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as yup from 'yup'
import maintenanceSchema from '../utils/maintenanceSchema'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const initialFormValues = {
    title: '',
    request: '',
    request_image: '',
    urgency: '',
}

const initialFormErrors = {
    title: '',
    request: '',
    request_image: '',
    urgency: '',
}

const MaintenanceForm = () => {

    const { push } = useHistory();

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)

    const handleChange = e => {
        yup.reach(maintenanceSchema, e.target.name)
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
        maintenanceSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    const handleSubmit = e => {
        e.preventDefault();
        const newRequest = {
            title: formValues.title.trim(),
            request: formValues.request.trim(),
            request_image: formValues.request_image,
            urgency: formValues.urgency.trim(),
        }

        axiosWithAuth().post('/maintenance', newRequest)
            .then(res => {
                console.log(res)
                push('/maintenancerequest')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <section>
            <section className="form_section2">
                <h1>New Maintenance Request</h1><br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-label mt-4">
                        <label htmlFor="title">Title:</label>
                        <input className="form-control" onChange={handleChange} value={formValues.title} name="title" id="title" placeholder="Request Title" />
                    </div>
                    <p className='errors'>{formErrors.title}</p>
                    <div className="form-group form-label mt-3">
                        <label htmlFor="request">Request:</label>
                        <textarea className="form-control" onChange={handleChange} value={formValues.request} rows="4" name="request" id="floatingTextarea" placeholder="State Your Request" />
                    </div>
                    <p className='errors'>{formErrors.request}</p>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile02" onChange={handleChange} value={formValues.request_image} name="request_image" />
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <p className='errors'>{formErrors.request_image}</p>
                    <div className="form-group mt-3">
                        <select className="form-select" value={formValues.urgency} name="urgency" onChange={handleChange} >
                            <option value="">-- Select request urgency --</option>
                            <option value="Less Important">Less Important</option>
                            <option value="Important">Important</option>
                            <option value="Very Important">Very Important</option>
                        </select>
                        <p className='errors'>{formErrors.urgency}</p>
                    </div>
                    <br />
                    <button disabled={disabled} >Submit a Maintenance Request</button> <></>
                    <Link to={'/dashboard'}><button className="btn btn-secondary" type="button" value="Cancel"> Cancel </button></Link>
                </form><br />
            </section>
        </section>
    )
}

export default MaintenanceForm
