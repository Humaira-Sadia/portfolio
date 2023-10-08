import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 0,
      link: "home",
    },
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "work",
    },
    {
      id: 3,
      link: "contact",
    },
  ];

  // const render = () => {
  //   links.forEach((content) => {
  //     console.log(content)
  //     document.getElementById(content.link).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   });
  // };

  return (
    <nav className="text-white flex justify-between p-5 z-10 opacity-100 gradient__bg h-16 w-full items-center fixed font-poppins font-bold">
      <div className="text-3xl">Humaira</div>
      <div className="justify-end hidden md:flex">
        <ul className="w-[80%] flex p-2">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium hover:scale-105 duration-200 mr-10 text-[18px] text-gray-300 active:scale-100 active:border px-1 rounded"
            >
              <Link
                // onClick={render()}
                to={link === "home" ? "/portfolio" : `/portfolio/${link}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-[#3A3838] font-semibold gradient__text w-full rounded">
          Let's talk
        </button>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <FaTimes size={30} className="text-white" />
        ) : (
          <FaBars size={30} className="text-white" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col bg-black justify-center items-center absolute top-0 left-0 w-full h-screen">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
              onClick={() => setNav(!nav)}
            >
              <Link to={link === "home" ? "/" : `/${link}`}>{link}</Link>{" "}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
