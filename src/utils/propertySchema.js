import * as yup from 'yup'

const propertySchema = yup.object().shape({

  owner: yup.string()
    .trim()
    .required('Fullname is required')
    .min(5, 'Name must be more than 5 characters'),

  property_address: yup.string()
    .trim()
    .required('Please state the property address'),

  property_city: yup.string()
    .trim()
    .required('Please state the property city'),
  
  property_state: yup.string()
  .trim()
  .required('Please select the state'),

})

export default propertySchema
