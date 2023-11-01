import React, { useState } from "react";

const OurClient = () => {
  const client = [
    {
      message: `consectetur adipisicing elit. Velit eaque repudiandae voluptatem repellendus,
      ex illo esse libero, reiciendis impedit hic non inventore ea! 
      Commodi earum, quas voluptatem illum soluta voluptate.`,
      img: "client1.jpg",
      name: "natalia jea",
      job: "Front-End Developer",
    },
    {
      message: `Velit eaque repudiandae voluptatem repellendus,
      ex illo esse libero, reiciendis impedit hic non inventore ea! 
      Commodi earum.`,
      img: "client2.jpg",
      name: "nicole walet",
      job: "UI/UX",
    },
  ];
  const [currentClient, setCurrentClient] = useState(0);
  // prev image slide
  const preClient = () => {
    const isFirstSlide = currentClient === 0;
    const newIndex = isFirstSlide ? client.length - 1 : currentClient - 1;
    setCurrentClient(newIndex);
  };
  // next image slide
  const nextClient = () => {
    const isLastSlide = currentClient === client.length - 1;
    const newIndex = isLastSlide ? 0 : currentClient + 1;
    setCurrentClient(newIndex);
  };
  return (
    <section className="mb-28">
      <div className="container mx-auto p-4">
        <div className="client">
          {/* box client */}
          <div className="w-full md:w-1/2 md:mx-auto text-center bg-slate-100 p-6 capitalize">
            <span className="block text-4xl text-blue-600 my-2">icon</span>
            <p>{client[currentClient].message}</p>
            <img
              src={`./images/${client[currentClient].img}`}
              alt={client[currentClient].name}
              className="my-2 w-[60px] h-[60px] rounded-full object-cover mx-auto"
            />
            <h3 className="text-2xl font-bold">{client[currentClient].name}</h3>
            <h4 className="text-base text-slate-600 font-light">
              {client[currentClient].job}
            </h4>
          </div>
          <div className="text-center my-4">
            {/* prev client */}
            <button
              className=" text-xl text-blue-300 p-2 hover:text-blue-600 duration-300 ease-in"
              onClick={preClient}
            >
              pre
            </button>
            {/* next client */}
            <button
              className="ml-4 text-xl text-blue-300 p-2 hover:text-blue-600 duration-300 ease-in"
              onClick={nextClient}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
