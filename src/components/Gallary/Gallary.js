import React from "react";
import Photos from "./Photos";

const Gallary = () => {
  return (
    <section id="gallary" className="mb-28">
      <div className="container mx-auto p-4">
        <p className="uppercase text-blue-600 text-xs md:text-sm font-semibold text-center">
          huge gallary
        </p>
        <h6 className="capitalize text-xl md:text-6xl font-bold my-2 md:my-4 text-center">
          AI-powered design
        </h6>
        {/* photos */}
        <Photos />
      </div>
    </section>
  );
};

export default Gallary;
