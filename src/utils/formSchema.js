import * as yup from 'yup'

const formSchema = yup.object().shape({

  firstName: yup.string()
    .trim()
    .required('First Name is required')
    .min(3, 'First Name must be at least 3 characters long'),

  lastName: yup.string()
    .trim()
    .required('Surname is required')
    .min(3, 'Last Name must be at least 3 characters long'),

  email: yup.string()
    .trim()
    .required('Email Address is required')
    .email('Must be a valid email address'),
  phone: yup.string()
    .required('Phone Number is required')
    .max(11, 'Phone Number cannot be more than 11 characters'),
  address: yup.string()
    .trim()
    .required('House address is required'),
  location: yup.string()
    .trim()
    .required('Please select your location'),
  password: yup.string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  
})

export default formSchema
