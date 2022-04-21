import { Field, Form, Formik } from 'formik'
import axios from 'axios'
function CreateIdea() {
  const onSubmit = values => axios.post('/post', values)
  return (
    <Formik onSubmit={onSubmit} initialValues={{ title: '', description: '' }}>
      <Form>
        <div className='mt-3'>
          <h1>Submit new idea</h1>
          <div class='form-group my-3'>
            <Field name='title' class='form-control' placeholder='Title'></Field>
          </div>
          <div class='form-group my-3'>
            <Field
              name='description'
              as='textarea'
              class='form-control'
              rows='7'
              placeholder='description'
            ></Field>
          </div>

          <div className='d-flex my-3'>
            <button className='px-5 ms-auto btn btn-primary'>Submit</button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default CreateIdea
