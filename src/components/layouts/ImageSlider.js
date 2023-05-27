import React, { useState, useEffect } from "react";
import "../../styles/image-slider.css"

// hero page images
import heroImage1 from "../../assets/Component 15.png";
import heroImage2 from "../../assets/Property 1=Rectangle 779-1-min.png";
import heroImage3 from "../../assets/Property 1=Rectangle 777-min.png";
import heroImage4 from "../../assets/Property 1=Rectangle 775-min.png";
import heroImage5 from "../../assets/Property 1=Rectangle 778-min.png";
import heroImage6 from "../../assets/Property 1=Rectangle 776-min.png";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const images = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage(nextImage);
    }, 2950);

    return () => clearTimeout(timer);
  }, [nextImage]);

  return (
      <div className="wrapper">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Hero ${index + 1}`}
            className={`images ${index === currentImage ? "fade-in" : ""} ${
              index === nextImage ? "fade-out" : ""
            }`}
          />
        ))}
      </div>
  );
};

export default ImageSlider;
