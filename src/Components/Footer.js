import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
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
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "projects",
    },
  ];
  return (
    <footer className=" w-full text-black bg-[#fff] h-40  px-6">
      <div className="flex  items-center justify-between ">
        <div>
          <h1
            className="font-signature m-6  text-5xl font-bold cursor-pointer hover:scale-110 duration-200 "
            id="logo"
          >
            Ansh
          </h1>
        </div>
        <ul className="flex text-black font-bold mr-10" id="footer-div">
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
      </div>
      <hr className="w-[90%] m-auto border-black font-bold pt-6 " />
      <p className="my-1 font-semibold text-lg text-center ">
        Made with ❤️ By <a href="https://github.com/Anshjatana" target="_blank" rel="noreferrer" >Ansh jatana</a>
      </p>
    </footer>
  );
};

export default Footer;
