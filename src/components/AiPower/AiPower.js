import React from "react";

const AiPower = () => {
  return (
    <section className="mb-28">
      <div className="container mx-auto p-4">
        <p className="uppercase text-blue-600 text-xs md:text-sm font-semibold text-center">
          huge collection
        </p>
        <h3 className="capitalize text-xl md:text-6xl font-bold my-2 md:my-4 text-center">
          AI-powered design
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-center my-8 capitalize">
          {/* box 1 */}
          <div className="bg-blue-50 p-4 rounded-md hover:shadow-md duration-300 ease-in">
            <span className="text-blue-600 text-xl">arrow icon</span>
            <h4 className="text-xl font-bold my-2">intelligent</h4>
            <p className="text-sm font-light text-slate-600">
              adipiscing eit,sit amet consectetur adipisicing.
            </p>
            <span>arrow icon</span>
          </div>
          {/* box 2 */}
          <div className="bg-blue-50 p-4 rounded-md hover:shadow-md duration-300 ease-in">
            <span className="text-blue-600 text-xl">arrow icon</span>
            <h4 className="text-xl font-bold my-2">visualization</h4>
            <p className="text-sm font-light text-slate-600">
              adipiscing eit,sit amet consectetur adipisicing.
            </p>
            <span>arrow icon</span>
          </div>
          {/* box 3 */}
          <div className="bg-blue-50 p-4 rounded-md hover:shadow-md duration-300 ease-in">
            <span className="text-blue-600 text-xl">arrow icon</span>
            <h4 className="text-xl font-bold my-2">creativity</h4>
            <p className="text-sm font-light text-slate-600">
              adipiscing eit,sit amet consectetur adipisicing.
            </p>
            <span>arrow icon</span>
          </div>
          {/* box 4 */}
          <div className="bg-blue-50 p-4 rounded-md hover:shadow-md duration-300 ease-in">
            <span className="text-blue-600 text-xl">arrow icon</span>
            <h4 className="text-xl font-bold my-2">flexible</h4>
            <p className="text-sm font-light text-slate-600">
              adipiscing eit,sit amet consectetur adipisicing.
            </p>
            <span>arrow icon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPower;
