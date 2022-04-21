import { Link, useParams } from 'react-router-dom'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { useQuery } from 'react-query'
import axios from 'axios'
import Comments from './Comments'
import { useEffect } from 'react'

function Reactions({ id }) {
  return <div>{id}</div>
}

function Thread() {
  const { ideaId } = useParams()
  console.log(ideaId)

  const { data = {}, isLoading, refetch } = useQuery(`get-idea-${ideaId}`, () =>
    axios.get(`/post/${ideaId}`).then(res => res.data)
  )

  useEffect(() => {
    refetch()
  }, [ideaId, refetch])

  if (isLoading) return <div>Loading</div>

  const { _id, title, description, author, createdAt, comments } = data

  return (
    <DashboardLayout>
      <div className='mt-3'>
        <div className='d-flex align-items-center justify-content-between'>
          <h1>{title}</h1>
          <div>
            <strong className='me-3'>
              <Link to={`/user/${author.id}`}>
                {author.firstName} {author.lastName}
              </Link>
            </strong>
            ({new Date(createdAt).toLocaleString()})
          </div>
        </div>
        <p>{description}</p>
      </div>
      <Reactions id={_id} />
      <Comments refetch={refetch} comments={comments} id={_id} />
    </DashboardLayout>
  )
}

export default Thread
