import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  const array = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <nav className="flex items-center justify-between w-full text-white z-30 fixed   bg-[rgb(0,0,0,0.7)] h-10 py-10 px-6">
      <h1
        className="font-signature m-6  text-5xl font-bold cursor-pointer hover:scale-110 duration-200 "
        id="logo"
      >
        Ansh
      </h1>

      <ul className="hidden md:flex text-[#ffffffc7] mr-10">
        {array.map(({ id, link }) => (
          <li
            className="mx-4 uppercase cursor-pointer hover:scale-125 duration-200 "
            key={id}
          >
            <Link to={link} smooth={true} duration={900}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={handleNav}
        className="md:hidden mr-2  cursor-pointer z-10 text-[#ffffffc7]"
      >
        {nav ? <X size={30} /> : <Menu size={30} />}
      </div>
      {nav ? (
        <ul className="flex md:hidden  flex-col text-[#ffffffc7]  bg-[rgb(4,8,17,0.7)] absolute py-2  items-center justify-center top-16 left-0 w-full ">
          {array.map(({ id, link }) => (
            <li
              className="my-2 uppercase cursor-pointer hover:scale-125 duration-200"
              key={id}
            >
              <Link to={link} smooth={true} duration={900}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="hidden"></ul>
      )}
    </nav>
  );
};

export default NavBar;
