import React, { useState } from "react";

const Photos = () => {
  const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
  ];
  const photosHidden = [
    "photo9.jpg",
    "photo10.jpg",
    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg",
    "photo15.jpg",
    "photo16.jpg",
  ];
  const [allImg, setAllImg] = useState(false);
  const handelShowImg = () => {
    setAllImg(!allImg);
  };
  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2">
        {photos.map((item, index) => (
          <div key={index}>
            <img
              src={`./images/${item}`}
              alt={item}
              className="w-[800px] h-[700px] object-cover"
            />
          </div>
        ))}
      </div>
      {/* hidden photos */}
      <div
        className={
          allImg ? "mt-2 grid md:grid-cols-2 xl:grid-cols-4 gap-2" : "hidden"
        }
      >
        {photosHidden.map((item, index) => (
          <div key={index}>
            <img
              src={`./images/${item}`}
              alt={item}
              className="w-[800px] h-[700px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="capitalize font-bold text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 duration-300 ease-out my-2"
          onClick={handelShowImg}
        >
          {allImg ? "view less images" : "view all gallery"}
        </button>
      </div>
    </div>
  );
};

export default Photos;
