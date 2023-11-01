import React from "react";

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="container mx-auto p-6">
        <div className="hero capitalize text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-5xl md:text-6xl font-bold">
            the <span className="text-blue-600">future</span> in AI grapic
            generator
          </h1>
          <p className="text-sm md:text-base font-light my-6">
            an active openAI token is essential for image feneration
          </p>
          <button className="capitalize font-bold text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 duration-300 ease-out">
            get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
