import "./Gallery.css";
import CarouselSlide from "./CarouselSlide";

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      <h1>Zamsof Events Gallery</h1>
      <p>
        ZAMSOF events unite communities through discussions, workshops, and cultural activities, fostering solutions to social and sustainable challenges. These events amplify voices and inspire collective action.
      </p>

      {/* Carousel Section */}
      <div className="carousel">
        <CarouselSlide />
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        {Array.from({ length: 21 }, (_, index) => (
          <div
            key={index}
            className={`image-item ${
              index % 3 === 0 ? "patriotic" : "landscape"
            } ${
              index % 5 === 0 ? "patriotic" : "landscape"
            }`}
          >
            <img
              src={`/images/${index + 1}.jpg`}
              alt={`Event Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
