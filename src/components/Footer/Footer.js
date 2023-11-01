import React from "react";

const Footer = () => {
  return (
    <footer className="capitalize py-2">
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* box 1 */}
          <div>
            <h1 className="text-2xl">
              <span className="font-bold text-blue-600">Ai</span>SDW
            </h1>
            <p className="text-sm font-light text-slate-600">
              copyrigth &copy; 2023 shadow007 all rights reseved
            </p>
          </div>
          {/* box 2 */}
          <div>
            <h2 className="text-2xl">about</h2>
            <ul>
              <li className="hover:text-blue-400 duration-300 ease-in transition-all cursor-pointer">about company</li>
              <li className="hover:text-blue-400 duration-300 ease-in transition-all cursor-pointer">our solutions</li>
              <li className="hover:text-blue-400 duration-300 ease-in transition-all cursor-pointer">our best services</li>
              <li className="hover:text-blue-400 duration-300 ease-in transition-all cursor-pointer">professional team</li>
            </ul>
          </div>
          {/* box 3 */}
          <div>
            <h2 className="text-2xl">address</h2>
            <ul>
              <li className="hover:text-blue-400 duration-300 ease-in transition-all cursor-pointer">
                551 swanston street,melboume <br /> victoria 3053 australia
              </li>
              <li className="hover:text-blue-400 duration-300 ease-in transition-all cursor-pointer">+61 3 8376 6284</li>
              <li className="hover:text-blue-400 duration-300 ease-in transition-all cursor-pointer">info@shadow007.com</li>
            </ul>
          </div>
          {/* box 4 */}
          <div>
            <h2 className="text-2xl mb-2">newsletter sing up</h2>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-2 px-4 py-1 w-full"
            />
            <button className="capitalize font-bold text-white bg-blue-600 px-4 py-1 hover:bg-blue-500 duration-300 ease-out w-full mt-2">
              send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
