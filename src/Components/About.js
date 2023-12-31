import React from "react";
import memoji from "../assets/memoji.webp";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiCanva,
} from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandVscode, TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8" id="about">
      <h6 className="text-white text-[15px] font-semibold uppercase text-center  ">
        Get to know
      </h6>
      <h3
        className="text-white text-[30px] font-semibold uppercase text-center "
        id="heading"
      >
        About Me
      </h3>
      <div className="flex  items-center justify-evenly " id="about-div">
        <img src={memoji} alt="memoji" className="h-[400px]" id="memoji" />
        <div
          className="text-white text-[17px] w-[50%]  mt-[60px] "
          id="about-text"
        >
          <p>
            Every day, I eagerly embrace the path of continuous learning,
            channeling my passion for Front-end Development to create
            captivating digital experiences. Coming from a Non-tech background ,
            my fascination with crafting frontend marvels guides me. I've
            transformed myself into a{" "}
            <span className="font-bold text-[#ff0044]">Self-taught coder</span>,
            conquering HTML, CSS, JavaScript, React.js and Next.js against all
            odds.
          </p>
          <br />
          <p>
            My motto is quality, and I'm devoted to user experience. I champion
            impactful code, excited to collaborate with fellow visionaries.
            Let's craft web stories that leave a mark.
          </p>
          <br />
          <h3
            className="text-[30px] font-semibold text-[paleturquoise]"
            id="lets-connect"
          >
            Lets Connect!
          </h3>
          <div className="flex justify-between items-center w-[200px] mt-6 ">
            <a
              href="https://www.linkedin.com/in/ansh-jatana-10b446205/"
              target="blank"
            >
              <button className="hover:scale-125 duration-200">
                <Linkedin className="icons" />
              </button>
            </a>
            <a href="https://github.com/Anshjatana" target="blank">
              <button className="hover:scale-125 duration-200">
                <Github className="icons" />
              </button>
            </a>
            <a href="https://twitter.com/anshh_jatana" target="blank">
              <button className="hover:scale-125 duration-200">
                <Twitter className="icons" />
              </button>
            </a>
            <a href="https://www.instagram.com/anshhhhjatana/" target="blank">
              <button className="hover:scale-125 duration-200">
                <Instagram className="icons" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <h3
        className="text-white text-[30px] font-semibold uppercase text-center mt-[100px]"
        id="heading"
      >
        experience
      </h3>
      <p
        className="text-[20px] font-semibold text-center mt-2 text-[paleturquoise] "
        id="exp-line"
      >
        These are the technologies I've worked with
      </p>
      <div
        className="flex flex-wrap items-center justify-center mt-10 w-[70%]"
        id="buttons"
      >
        <button className="hover:bg-white hover:text-black  flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <AiFillHtml5 size={28} color="#E74625" id="icon" />
          HTML
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiCss3 size={24} color="#3057EC" id="icon" />
          CSS
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <BiLogoJavascript size={28} color="#F5DD1B" id="icon" />
          JavaScript
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <FaReact size={28} color="#50A6BD" id="icon" />
          React.js
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <TbBrandNextjs size={28} color="gray" id="icon" />
          Next.js
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <BiLogoTypescript size={28} color="#2F74C0" id="icon" />
          TypeScript
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiRedux size={28} color="#684CB2" id="icon" />
          Redux
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiTailwindcss size={28} color="#42A7B1" id="icon" />
          Tailwind CSS
        </button>
        <button className="hover:bg-white hover:text-black flex  items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiBootstrap size={28} color="#543C7A" id="icon" />
          Bootstrap
        </button>
        <button className="hover:bg-white hover:text-black flex   items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <BsGit size={28} color="#EE5032" id="icon" />
          Git
        </button>
        <button className="hover:bg-white hover:text-black flex  items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <AiFillGithub size={28} color="darkgray" id="icon" />
          GitHub
        </button>

        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <TbBrandVscode size={28} color="#24ABF2" id="icon" />
          VS Code
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiCanva size={28} color="#20BDC6" id="icon" />
          Canva
        </button>
      </div>
    </div>
  );
};

export default About;
