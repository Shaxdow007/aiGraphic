import React from "react";
import ImageSlider from "./ImageSlider";

const WhatWeDo = () => {
  return (
    <section id="what we do" className="mb-28">
      <div className="container mx-auto p-4">
        <div className="what-we-do text-center">
          <p className="uppercase text-blue-600 text-xs md:text-sm font-semibold">
            what we do
          </p>
          <h2 className="text-xl md:text-6xl font-bold my-2 md:my-4">
            unleash the potenital of AI development tools crafred with
            brilliance, style, quality, and creativity
          </h2>
          {/* images slider */}
          <ImageSlider />
          {/* images slider close*/}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
