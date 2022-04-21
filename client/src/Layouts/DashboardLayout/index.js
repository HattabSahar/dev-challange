import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './dashboard.css'
import classNames from 'classnames'

function DashboardLayout({ children, isHero = false }) {
  return (
    <>
      <Navbar />
      <div class={classNames('container-fluid')}>
        <div class='row h-100'>
          <Sidebar />
          <main
            class={classNames('col-md-9 ms-sm-auto col-lg-10 px-md-4', {
              'hero-container': isHero,
            })}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
