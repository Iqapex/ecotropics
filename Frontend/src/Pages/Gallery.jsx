
import img from '../assets/carbon.jpg'
import GalleryPage from '../components/Gallery/GalleryPage'
import HeroAbout from '../components/HeroAbout/HeroAbout'

function Gallery() {
  return (
    <div>
      <HeroAbout text="Gallery " img={img}/>
      <GalleryPage />
    </div>
  )
}

export default Gallery