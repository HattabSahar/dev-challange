import style from './style.module.css'
import classNames from 'classnames'

function AuthLayout({ title, ...props }) {
  return (
    <div className={style.authContainer}>
      <main className={classNames(style.formSignin, 'text-center')}>
        <h1 className='h3 mb-3 fw-normal'>{title}</h1>
        {props.children}
        <p className='mt-5 mb-3 text-muted'>&copy; 2017–2021</p>
      </main>
    </div>
  )
}
export default AuthLayout
