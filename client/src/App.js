import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Dashboard'
import LoginPage from './pages/Login'
function App() {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  )
}

export default App
