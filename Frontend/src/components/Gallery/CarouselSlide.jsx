import { useState, useEffect } from "react";
import "./CarouselSlide.css";

function CarouselSlide() {
  const images = [
    "/carousel/1.jpg",
    "/carousel/2.jpg",
    "/carousel/3.jpg",
    "/carousel/4.jpg",
    "/carousel/5.jpg",
    "/carousel/6.jpg",
    "/carousel/7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add clones for seamless looping
  const imagesWithClones = [
    images[images.length - 1], // Clone of the last image
    ...images,
    images[0], // Clone of the first image
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, isTransitioning]); // Dependencies include currentIndex and isTransitioning

  // Handle next slide
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Handle transition end for infinite looping
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Reset index when reaching clones
    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    } else if (currentIndex === images.length + 1) {
      setCurrentIndex(1);
    }
  };

  return (
    <section className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {imagesWithClones.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselSlide;
