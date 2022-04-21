import { Route, Routes } from 'react-router-dom'
import CommingSoon from './CommingSoon'

function HomePage() {
  return (
    <Routes>
      <Route index element={<CommingSoon />}></Route>
      <Route path='ideas' element={<CommingSoon />}></Route>
      <Route path='discussion' element={<CommingSoon />}></Route>
      <Route path='project' element={<CommingSoon />}></Route>
      <Route path='supervision' element={<CommingSoon />}></Route>
      <Route path='*' element={<CommingSoon />}></Route>
    </Routes>
  )
}

export default HomePage
