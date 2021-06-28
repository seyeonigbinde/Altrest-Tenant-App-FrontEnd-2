import * as yup from 'yup'

const tenantSchema = yup.object().shape({

  apartment: yup.string()
    .trim()
    .required('Apartment number is required'),

  tenant_name: yup.string()
    .trim()
    .required('Please state the name of the tenant'),

  tenant_email: yup.string()
    .trim()
    .required('Please state the email of the tenant'),
  
    tenant_phone: yup.string()
    .trim()
    .required('Please state the phone number of the tenant'),

    tenant_occupation: yup.string()
    .trim()
    .required('Please state the occupation of the tenant'),

})

export default tenantSchema
