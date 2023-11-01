import React, { useState } from "react";

const ImageSlider = () => {
  const slides = [
    {
      url: "bg1.jpg",
    },
    {
      url: "bg2.jpg",
    },
    {
      url: "bg3.jpg",
    },
    {
      url: "bg4.jpg",
    },
    {
      url: "bg5.jpg",
    },
    {
      url: "bg6.jpg",
    },
    {
      url: "bg7.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // prev image slide
  const preSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  // next image slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // button slide
  const btnSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="my-8 relative group">
      <div
        className="x w-full h-[400px] md:h-[800px] bg-center bg-cover bg-no-repeat rounded-2xl"
        style={{
          backgroundImage: `url(../images/${slides[currentIndex].url})`,
        }}
      ></div>
      {/* arrow left */}
      <div
        className="hidden group-hover:block duration-500 ease-in absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5"
        onClick={preSlide}
      >
        <span className="bg-black/30 text-white/30 p-2 md:p-4 rounded-full hover:bg-black/50 hover:text-white  hover:shadow-lg duration-300 ease-in cursor-pointer">
          prev
        </span>
      </div>
      {/* arrow right */}
      <div
        className="hidden group-hover:block duration-500 ease-in absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5"
        onClick={nextSlide}
      >
        <span className="bg-black/30 text-white/30 p-2 md:p-4 rounded-full hover:bg-black/50 hover:text-white  hover:shadow-lg duration-300 ease-in cursor-pointer">
          next
        </span>
      </div>
      {/* button image slide */}
      <div className="flex justify-center items-center gap-2 my-4">
        {slides.map((slide, slideIndex) => (
          <span
            key={slideIndex}
            className="bg-blue-200 hover:bg-blue-600 duration-300 ease-in p-1 md:px-4 md:py-1 rounded-full cursor-pointer"
            onClick={() => btnSlide(slideIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
