import { useQuery } from 'react-query'
import axios from 'axios'
import { DislikeOutlined, LikeOutlined, LoadingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function MyIdeas() {
  const { isLoading, isFetching, data } = useQuery('get-my-ideas', () =>
    axios.get('/post/my').then(res => res.data)
  )
  console.log(data)
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
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(isLoading || isFetching) && (
            <tr>
              <td colSpan={5} className='text-center'>
                <LoadingOutlined />
              </td>
            </tr>
          )}
          {(data || []).length === 0 && (
            <tr>
              <td colSpan={5} className='text-center text-muted'>
                You have no previous idea
              </td>
            </tr>
          )}
          {(data || []).map(({ _id, comments, title, createdAt, ...item }) => {
            return (
              <tr key={_id}>
                <th scope='col'>
                  <Link to={`/discussion/${_id}`}>{title}</Link>
                </th>
                <th scope='col' className='d-flex' style={{ gap: 12 }}>
                  <span className='d-flex align-items-center' style={{ gap: 4 }}>
                    0 <LikeOutlined />
                  </span>
                  <span className='d-flex align-items-center' style={{ gap: 4 }}>
                    0 <DislikeOutlined />
                  </span>
                </th>
                <th scope='col'>{comments.length}</th>
                <th scope='col'>
                  {new Date(createdAt).toLocaleTimeString()}{' '}
                  {new Date(createdAt).toLocaleDateString()}
                </th>
                <th scope='col'>Actions</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default MyIdeas
