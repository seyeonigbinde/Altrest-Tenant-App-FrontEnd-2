import * as yup from 'yup'

const formSchema = yup.object().shape({

  firstName: yup.string()
    .trim()
    .required('First Name is required')
    .min(3, 'First Name  must be at least 3 characters long'),

  lastName: yup.string()
    .trim()
    .required('Last Name is required')
    .min(3, 'Last Name  must be at least 3 characters long'),
  username: yup.string()
    .trim()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters long'),

  email: yup.string()
    .required('Email is required')
    .email('Must be a valid email address'),
  
  password: yup.string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  role: yup.string()
    .trim()
    .required('You need to select a role'),
})

export default formSchema
