import React, { useState } from "react";
import {Menu, X} from 'lucide-react';

const NavBar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(prev => !prev)
    }
  const array = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact me",
    },
  ];
  return (
    <nav className="flex  items-center justify-between w-full text-white z-10 fixed   bg-[rgba(1,11,29,1)] h-10 py-10 px-6">
    <div>
        <h1 className="font-signature m-6  text-5xl font-bold cursor-pointer ">Ansh</h1>
      </div>
    
        <ul className="hidden sm:flex text-[#ffffffc7] mr-10">
          {array.map(({id,link}) => (
            <li
              className="mx-4 uppercase cursor-pointer hover:scale-125 duration-200 "
              key={id}
            >
              {link}
            </li>
          ))}
        </ul>
      <div onClick={handleNav} className="sm:hidden mr-2  cursor-pointer z-10 text-[#ffffffc7]">
      {nav?<X size={30}/>:<Menu size={30} />}
      </div>
      {nav?<ul className="flex sm:hidden  flex-col text-[#ffffffc7]  bg-[rgba(1,11,29,1)] absolute py-2  items-center justify-center top-16 left-0 w-full ">
        {array.map(({id,link})=><li className="my-2 uppercase cursor-pointer hover:scale-125 duration-200" key={id}>{link}</li>)}
      </ul>:<ul className="hidden"></ul>}
    </nav>
  );
};

export default NavBar;
