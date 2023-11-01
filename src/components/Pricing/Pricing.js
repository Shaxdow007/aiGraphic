import React from "react";

const Pricing = () => {
  return (
    <section className="mb-28">
      <div className="container mx-auto p-4">
        <p className="uppercase text-blue-600 text-xs md:text-sm font-semibold text-center">
          affordable plans
        </p>
        <h6 className="capitalize text-xl md:text-6xl font-bold my-2 md:mt-4 mb-8 text-center">
          pricing plans
        </h6>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {/* box 1 */}
          <div className="capitalize">
            <h3 className="text-2xl font-bold my-2">beta plan</h3>
            <p className="text-sm font-light text-slate-600 my-2">
              perfect for private individuals
            </p>
            <h4 className="text-2xl font-bold">
              $0<span className="text-base text-slate-600">/mo</span>{" "}
            </h4>
            <ul className="my-2">
              <li>50 project</li>
              <li>download prototypes</li>
              <li>graphic images</li>
            </ul>
            <button className="capitalize font-bold text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 duration-300 ease-out">
              get started
            </button>
          </div>
          {/* box 2 */}
          <div id="pricing" className="capitalize">
            <h3 className="text-2xl font-bold my-2">business plan</h3>
            <p className="text-sm font-light text-slate-600 my-2">
              perfect for private individuals
            </p>
            <h4 className="text-2xl font-bold">
              $8<span className="text-base text-slate-600">/mo</span>{" "}
            </h4>
            <ul className="my-2">
              <li>100 project</li>
              <li>download prototypes</li>
              <li>graphic images</li>
            </ul>
            <button className="my-2 capitalize font-bold text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 duration-300 ease-out">
              get started
            </button>
          </div>
          {/* box 3 */}
          {/* box 1 */}
          <div className="capitalize">
            <h3 className="text-2xl font-bold my-2">premium plan</h3>
            <p className="text-sm font-light text-slate-600 my-2">
              perfect for private individuals
            </p>
            <h4 className="text-2xl font-bold">
              $19<span className="text-base text-slate-600">/mo</span>{" "}
            </h4>
            <ul className="my-2">
              <li>unlimited projects</li>
              <li>download prototypes</li>
              <li>graphic images</li>
            </ul>
            <button className="my-2 capitalize font-bold text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 duration-300 ease-out">
              get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
