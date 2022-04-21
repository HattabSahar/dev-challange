import { Route, Routes } from 'react-router-dom'
import CommingSoon from './CommingSoon'
import Home from './Home'

function HomePage() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='ideas' element={<CommingSoon />}></Route>
      <Route path='discussion' element={<CommingSoon />}></Route>
      <Route path='project' element={<CommingSoon />}></Route>
      <Route path='supervision' element={<CommingSoon />}></Route>
      <Route path='*' element={<CommingSoon />}></Route>
    </Routes>
  )
}

export default HomePage
