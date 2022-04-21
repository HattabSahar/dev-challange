import { useQuery } from 'react-query'
import axios from 'axios'
import { DislikeFilled, LikeFilled, LoadingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function MyIdeaReactions({ id }) {
  const { isLoading, data = {} } = useQuery(`get-idea-${id}-reactions`, () =>
    axios.get(`/post/${id}/reaction`).then(res => res.data)
  )

  console.log(data)
  if (isLoading)
    return (
      <td className='d-flex' style={{ gap: 12 }}>
        <LoadingOutlined />
      </td>
    )

  const { up, down } = data

  return (
    <td className='d-flex' style={{ gap: 12 }}>
      <span className=' text-success d-flex align-items-center' style={{ gap: 4 }}>
        {up} <LikeFilled />
      </span>
      <span className='text-danger d-flex align-items-center' style={{ gap: 4 }}>
        {down} <DislikeFilled />
      </span>
    </td>
  )
}

function MyIdeas() {
  const { isLoading, isFetching, data } = useQuery('get-my-ideas', () =>
    axios.get('/post/my').then(res => res.data)
  )
  return (
    <>
      <h1>My previous ideas</h1>
      <table class='table mt-5'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Reactions</th>
            <th scope='col'>comments</th>
            <th scope='col'>Created At</th>
          </tr>
        </thead>
        <tbody>
          {(isLoading || isFetching) && (
            <tr>
              <td colSpan={4} className='text-center'>
                <LoadingOutlined />
              </td>
            </tr>
          )}
          {(data || []).length === 0 && (
            <tr>
              <td colSpan={4} className='text-center text-muted'>
                You have no previous idea
              </td>
            </tr>
          )}
          {(data || []).map(({ _id, comments, title, createdAt, ...item }) => {
            return (
              <tr key={_id}>
                <td>
                  <Link to={`/discussion/${_id}`}>{title}</Link>
                </td>
                <MyIdeaReactions id={_id} />
                <td>{comments.length}</td>
                <td>{new Date(createdAt).toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default MyIdeas
