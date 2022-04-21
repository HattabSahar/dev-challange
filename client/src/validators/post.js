import * as yup from 'yup'

const validMessage = `Please provide a valid title`

export const createPost = yup.object().shape({
  title: yup
    .string(validMessage)
    .min(3)
    .max(255, validMessage)
    .required(`Please provide a title`),
})
