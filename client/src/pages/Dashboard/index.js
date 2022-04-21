import { Route, Routes } from 'react-router-dom'
import CommingSoon from './CommingSoon'
import Thread from './discussion/Thread'
import Home from './Home'
import Idea from './Idea'

function HomePage() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='ideas' element={<Idea />}></Route>
      <Route path='discussion'>
        <Route index element={<CommingSoon />} />
        <Route path=':ideaId' element={<Thread />}></Route>
      </Route>
      <Route path='project' element={<CommingSoon />}></Route>
      <Route path='supervision' element={<CommingSoon />}></Route>
      <Route path='*' element={<CommingSoon />}></Route>
    </Routes>
  )
}

export default HomePage
