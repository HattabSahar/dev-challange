import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<h1>Home</h1>} />
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
