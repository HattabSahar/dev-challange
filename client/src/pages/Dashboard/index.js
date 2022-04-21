import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../../Layouts/DashboardLayout'

function HomePage() {
  return (
    <Routes>
      <Route index element={<DashboardLayout />}></Route>
      <Route path='ideas' element={<DashboardLayout />}></Route>
      <Route path='discussion' element={<DashboardLayout />}></Route>
      <Route path='project' element={<DashboardLayout />}></Route>
      <Route path='supervision' element={<DashboardLayout />}></Route>
      <Route path='*' element={<DashboardLayout />}></Route>
    </Routes>
  )
}

export default HomePage
