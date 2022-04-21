import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const sidebarItems = [
  { title: 'Home', link: '/' },
  { title: 'Ideas', link: '/ideas' },
  { title: 'Discussion', link: '/discussion' },
  { title: 'Project', link: '/project' },
  { title: 'Supervision', link: '/supervision' },
]

function Sidebar() {
  return (
    <nav
      id='sidebarMenu'
      className={classNames('col-md-3 col-lg-2 d-md-block bg-light collapse sidebar')}
    >
      <div className='position-sticky pt-3'>
        <ul className='nav flex-column'>
          {sidebarItems.map(({ title, link }) => (
            <li key={title} className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to={link}>
                <span data-feather='home'></span>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
