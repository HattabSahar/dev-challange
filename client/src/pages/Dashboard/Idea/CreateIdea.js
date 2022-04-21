import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios'
import { LoadingOutlined } from '@ant-design/icons'
import validators from '../../../validators/validators'

function CreateIdea() {
  const onSubmit = values => axios.post('/post', values)
  return (
    <Formik
      validationSchema={validators.post.createPost}
      onSubmit={onSubmit}
      initialValues={{ title: '', description: '' }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='mt-3'>
            <h1>Submit new idea</h1>
            <div className='form-group my-3'>
              <Field name='title' className='form-control' placeholder='Title'></Field>
              <small className='ms-2 text-danger'>
                <ErrorMessage name='title' />
              </small>
            </div>
            <div className='form-group my-3'>
              <Field
                name='description'
                as='textarea'
                className='form-control'
                rows='7'
                placeholder='description'
              ></Field>
              <ErrorMessage name='description' />
            </div>

            <div className='d-flex my-3'>
              <button disabled={isSubmitting} className='px-5 ms-auto btn btn-primary'>
                {isSubmitting ? <LoadingOutlined /> : 'Submit'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CreateIdea
