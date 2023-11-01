import React, { useState } from "react";

const NavBar = () => {
  const links = ["home", "what we do", "about", "gallary", "pricing"];
  const [navBar, setNavBar] = useState(false);
  const ToggleNav = () => {
    setNavBar(!navBar);
  };
  const handelClose = () => {
    setNavBar(!navBar);
  };
  return (
    <header>
      <nav className="container mx-auto p-4">
        <div className="flex justify-between items-center capitalize">
          <div className="flex justify-between items-center">
            <div className="logo">
              <a href="#home" className="text-2xl">
                {" "}
                <span className="font-bold text-blue-600">ai</span>SDW
              </a>
            </div>
            <ul className="hidden md:flex gap-4 ml-20 xl:ml-28">
              {links.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="font-bold hover:text-blue-400 duration-300 ease-out"
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {/* contact */}
            <div className="hidden md:block border-2 border-blue-600 px-6 py-1 rounded-md hover:bg-blue-600 hover:text-white duration-300 ease-out cursor-pointer">
              contact
            </div>
            {/* mobile menu */}
            <div className="sm:hidden" onClick={ToggleNav}>
              open
            </div>
          </div>
        </div>
      </nav>
      {/* mobile menu */}
      <ul
        className={
          navBar
            ? "absolute mobile sm:hidden right-0 z-10 w-full h-1/2  p-6 capitalize text-center rounded-lg shadow-lg "
            : "hidden"
        }
      >
        {links.map((item, index) => {
          return (
            <li
              key={index}
              className="font-bold hover:text-blue-400 duration-300 ease-out"
            >
              <a
                className="block w-full py-4 "
                href={`#${item}`}
                onClick={handelClose}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default NavBar;
