import React, { useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import validators from '../validators/validators'
import axios from 'axios'
import AuthLayout from '../Layouts/AuthLayout'
import { LoadingOutlined } from '@ant-design/icons'
import { useUserStore } from '../store/useUserStore'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { user, authenticateUser } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user])

  return (
    <AuthLayout title='Please sign in'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validators.user.loginSchema}
        onSubmit={values => {
          return axios.post('/auth/login', values).then(res => {
            const { user, token } = res.data
            authenticateUser(user)

            localStorage.setItem('jwt', token)
            axios.defaults.headers.authorization = `Bearer ${token}`
          })
        }}
      >
        {props => (
          <Form>
            <ErrorMessage name='username' />
            <ErrorMessage name='password' />
            <div className='form-floating'>
              <Field className='form-control' name='username' />
              <label htmlFor='username'>Username </label>
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
            <button
              disabled={props.isSubmitting}
              className='w-100 btn btn-lg btn-primary'
              type='submit'
            >
              {props.isSubmitting ? <LoadingOutlined /> : 'Sign in'}
            </button>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  )
}

export default LoginPage
