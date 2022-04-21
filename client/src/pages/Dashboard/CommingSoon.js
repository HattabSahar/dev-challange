import DashboardLayout from '../../Layouts/DashboardLayout'
import commingSoonImage from '../../assets/comming-soon.png'

function CommingSoon() {
  return (
    <DashboardLayout isHero>
      <img src={commingSoonImage} alt='Comming Soon' />
    </DashboardLayout>
  )
}

export default CommingSoon
