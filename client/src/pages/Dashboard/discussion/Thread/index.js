import { Link, useParams } from 'react-router-dom'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import { useQuery } from 'react-query'
import axios from 'axios'
import Comments from './Comments'
import { useEffect } from 'react'
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons'
import classNames from 'classnames'

function Reactions({ id }) {
  const selectUp = Math.random() > 0.5
  const selectDown = Math.random() > 0.5
  return (
    <div>
      <div className='d-flex' style={{ gap: 12 }}>
        <button
          className={classNames('btn btn-sm', 'd-flex', 'align-items-center', {
            'btn-outline-success': selectUp,
            'btn-success': !selectUp,
          })}
          style={{ gap: 4 }}
        >
          0 {selectUp ? <LikeOutlined /> : <LikeFilled />}
        </button>
        <button
          className={classNames('btn btn-sm', 'd-flex', 'align-items-center', {
            'btn-outline-danger': selectDown,
            'btn-danger': !selectDown,
          })}
          style={{ gap: 4 }}
        >
          0 {selectDown ? <DislikeOutlined /> : <DislikeFilled />}
        </button>
      </div>
    </div>
  )
}

function Thread() {
  const { ideaId } = useParams()

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
          <div className='d-flex align-items-center '>
            <h1 className='me-5'>{title}</h1>
            <Reactions id={_id} />
          </div>
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

      <Comments refetch={refetch} comments={comments} id={_id} />
    </DashboardLayout>
  )
}

export default Thread
