import { Link } from 'react-router-dom'
import AddComment from './AddComment'

function Comments({ refetch, comments = [], id }) {
  return (
    <div className='border-top mt-3 pt-3'>
      <AddComment refetch={refetch} id={id} />
      {comments.map(({ _id, createdAt, comment, ...commentData }) => {
        console.log(comment)
        return (
          <div key={_id} className='card my-3'>
            <div className='card-header d-flex justify-content-between'>
              <div>
                <strong>
                  <Link to={`/user/6261a95a437ae60c88ef4045`}>author name</Link>
                </strong>
              </div>
              <div>{new Date(createdAt).toLocaleString()}</div>
            </div>
            <div className='card-body'>{comment}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
