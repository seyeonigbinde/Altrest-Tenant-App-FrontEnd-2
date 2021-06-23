import * as yup from 'yup'

const maintenanceSchema = yup.object().shape({

  title: yup.string()
    .trim()
    .required('Request title is required')
    .max(50, 'Title can only be 50 characters long'),

  request: yup.string()
    .trim()
    .required('Please state your request')
    .max(500, 'Request cannot be more than 500 characters'),

  request_image: yup.string(),
    // .required('Please upload an image'),
  
  urgency: yup.string()
  .trim()
  .required('Please select the urgency'),

})

export default maintenanceSchema