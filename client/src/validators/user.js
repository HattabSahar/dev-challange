import * as yup from 'yup'

const validMessage = `Please provide a valid email and password`

export const loginSchema = yup.object().shape({
  email: yup
    .string(validMessage)
    .min(3)
    .max(255, validMessage)
    .email(validMessage)
    .required('Please enter your email and password.'),
  password: yup
    .string(validMessage)
    .min(8, validMessage)
    .max(50, validMessage)
    .required('Please enter your email and password.'),
})
