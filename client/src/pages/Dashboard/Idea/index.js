import DashboardLayout from '../../../Layouts/DashboardLayout'
import CreateIdea from './CreateIdea'
import MyIdeas from './MyIdeas'

function Idea() {
  return (
    <DashboardLayout>
      <CreateIdea />
      <MyIdeas />
    </DashboardLayout>
  )
}

export default Idea
