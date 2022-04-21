import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import validators from '../validators/validators'

// import LoginForm from './LoginForm'
import AuthLayout from '../Layouts/AuthLayout'

const LoginPage = () => (
  <AuthLayout title='Please sign in'>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validators.user.loginSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {props => (
        <Form>
          <ErrorMessage name='email' />
          <ErrorMessage name='password' />
          <div className='form-floating'>
            <Field className='form-control' name='email' placeholder='name@example.com' />
            <label htmlFor='email'>Email address</label>
          </div>
          <div className='form-floating'>
            <Field
              type='password'
              className='form-control'
              name='password'
              placeholder='Password'
            />
            <label htmlFor='password'>Password</label>
          </div>

          <div className='checkbox mb-3'>
            <label>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
        </Form>
      )}
    </Formik>
  </AuthLayout>
)

export default LoginPage
