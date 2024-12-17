
import img from '../assets/carbon.jpg'
import HeroAbout from '../components/HeroAbout/HeroAbout'
import News from '../components/News/News'

function Newss() {
  return (
    <div>
      <HeroAbout text="News And Updates " img={img}/>
      <News/>
    </div>
  )
}

export default Newss