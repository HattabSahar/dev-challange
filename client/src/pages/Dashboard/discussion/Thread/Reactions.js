import { useQuery } from 'react-query'
import axios from 'axios'
import { useEffect } from 'react'
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
  LoadingOutlined,
} from '@ant-design/icons'
import classNames from 'classnames'
import { useMutation } from 'react-query'

function Reactions({ id }) {
  const { refetch, data = {} } = useQuery(`get-post-${id}-reactions`, () =>
    axios.get(`/post/${id}/reaction`).then(res => res.data)
  )

  useEffect(() => {
    refetch()
  }, [refetch, id])

  const { mutate, isLoading } = useMutation(
    value => axios.post(`/post/${id}/reaction`, { value }),
    {
      onSuccess: () => refetch(),
    }
  )

  const { up, down, my } = data

  return (
    <div>
      <div className='d-flex' style={{ gap: 12 }}>
        <button
          disabled={my === 'UP' || isLoading}
          onClick={() => mutate('UP')}
          className={classNames('btn btn-sm', 'd-flex', 'align-items-center', {
            'btn-outline-success': my !== 'UP',
            'btn-success': my === 'UP',
          })}
          style={{ gap: 4 }}
        >
          {isLoading ? (
            <LoadingOutlined />
          ) : (
            <>
              {up} {my !== 'UP' ? <LikeOutlined /> : <LikeFilled />}
            </>
          )}
        </button>
        <button
          disabled={my === 'DOWN' || isLoading}
          onClick={() => mutate('DOWN')}
          className={classNames('btn btn-sm', 'd-flex', 'align-items-center', {
            'btn-outline-danger': my !== 'DOWN',
            'btn-danger': my === 'DOWN',
          })}
          style={{ gap: 4 }}
        >
          {isLoading ? (
            <LoadingOutlined />
          ) : (
            <>
              {down} {my !== 'DOWN' ? <DislikeOutlined /> : <DislikeFilled />}
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default Reactions
