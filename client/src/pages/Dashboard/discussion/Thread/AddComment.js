import { LoadingOutlined } from '@ant-design/icons'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'

function AddComment({ refetch, id }) {
  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={(values, actions) =>
        axios.post(`/post/${id}/comment`, values).then(() => {
          actions.resetForm()
          refetch()
        })
      }
    >
      {({ isSubmitting, ...props }) => (
        <Form>
          <div>
            <Field as='textarea' className='form-control' name='comment' rows={5}></Field>
          </div>
          <div className='my-3 d-flex'>
            <button disabled={isSubmitting} className='btn btn-primary ms-auto' type='submit'>
              {isSubmitting ? <LoadingOutlined /> : 'Add comment'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddComment
