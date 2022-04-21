import { Link } from 'react-router-dom'
import DashboardLayout from '../../Layouts/DashboardLayout'
import { useUserStore } from '../../store/useUserStore'

function Home() {
  const { user } = useUserStore()
  return (
    <DashboardLayout isHero>
      <div className='h4'>
        Welcome{' '}
        <span className='text-primary'>
          {user.firstName} {user.lastName}
        </span>
      </div>
      <q className='text-center display-3'>
        Your opinion matters
        <span className='d-block'>&</span>
        Your idea inspires
      </q>

      <div className='h5 d-flex align-items-center' style={{ gap: 15 }}>
        <Link className='text-secondary' to='/about-us'>
          About us
        </Link>
        <small style={{ fontSize: 10 }}>⬤</small>
        <Link className='text-secondary' to='/goal'>
          Goal
        </Link>
        <small style={{ fontSize: 10 }}>⬤</small>
        <Link className='text-secondary' to='/contact'>
          Contact
        </Link>
      </div>
    </DashboardLayout>
  )
}

export default Home
