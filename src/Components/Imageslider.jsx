import React, { useState } from "react";

const images = [
  "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/45348602ad4b2259.jpg?q=60",
  "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/83d1b7da878cab79.jpeg?q=60",
  "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/b601dcef4b7eb42d.jpg?q=60",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-screen-2  relative">
      {images.map((img, index) => (
        <div
          key={index}
          className={`${index === current ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
        >
          {index === current && (
            <img src={img} alt={`slide-${index}`} className="w-full rounded-lg h-100" />
          )}
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        &#10095;
      </button>

    </div>
  );
}
