import React from "react";
import aboutImg from "./aboutImg.jpg";
const About = () => {
  return (
    <section id="about" className="mb-28">
      <div className="container mx-auto p-4">
        <div className="about grid md:grid-cols-2 gap-8">
          <div>
            <img src={aboutImg} alt="/" />
          </div>
          <div className="text-center md:text-left">
            <p className="uppercase text-blue-600 text-xs md:text-sm font-semibold">
              about us
            </p>
            <h5 className="capitalize text-xl md:text-6xl font-bold my-4">
              architecting the digital future
            </h5>
            <p className="text-sm font-light text-slate-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              necessitatibus. Minima maiores nihil harum culpa. Temporibus,
              nulla, adipisci ducimus voluptate tenetur excepturi totam, nisi ad
              doloremque eius architecto! Quod, iusto sint necessitatibus nemo
              dignissimos quae unde rem eaque minus, ex itaque odio velit
              accusantium impedit officiis optio quidem provident! Cumque.
            </p>
            <button className="capitalize font-bold text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 duration-300 ease-out my-2">
              about us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
