import img from '../assets/carbon.jpg'
import ThematicPage from '../components/Thematic/ThematicPage'
import HeroAbout from '../components/HeroAbout/HeroAbout'

function Thematic() {
  return (
    <div style={{overflowX:'hidden'}}>
      <HeroAbout text="Thematic Areas" img={img}/>
      <ThematicPage />
    </div>
  )
}

export default Thematic
