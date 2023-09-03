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
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { BsWordpress, BsGit } from "react-icons/bs";

const About = () => {
   
  return (

    <div className="flex flex-col items-center justify-center mt-8" id="about">
      <h6 className="text-white text-[15px] font-semibold uppercase text-center  ">
        
        Get to know
      </h6>
      <h3 className="text-white text-[30px] font-semibold uppercase text-center ">
        About Me
      </h3>
      <div className="flex  items-center justify-evenly ">
        <img src={memoji} alt="memoji" className="h-[400px]" id="memoji" />
        <div className="text-white text-[17px] w-[50%]  mt-[60px] " id="about-text">
          <p>
            Every day, I eagerly embrace the path of continuous learning,
            channeling my passion for Front-end Development to create
            captivating digital experiences. Coming from a{" "}
            <span className="font-bold text-[#ff0044]">
              Non-tech background
            </span>
            , my fascination with crafting frontend marvels guides me. I've
            transformed myself into a{" "}
            <span className="font-bold text-[#ff0044]">self-taught coder</span>,
            conquering HTML, CSS, JavaScript, React.js and Redux against all
            odds.
          </p>
          <br />
          <p>
            My motto is quality, and I'm devoted to user experience. I champion
            impactful code, excited to collaborate with fellow visionaries.
            Let's craft web stories that leave a mark.
          </p>
          <br />
          <h3 className="text-[30px] font-semibold text-[paleturquoise]">
            Lets Connect!
          </h3>
          <div className="flex justify-between items-center w-[200px] mt-6 ">
            <a
              href="https://www.linkedin.com/in/ansh-jatana-10b446205/"
              target="blank"
            >
              <button className="hover:scale-125 duration-200" >
                <Linkedin/>
              </button>
            </a>
            <a href="https://github.com/Anshjatana" target="blank">
              <button className="hover:scale-125 duration-200">
                <Github />
              </button>
            </a>
            <a href="https://twitter.com/anshh_jatana" target="blank">
              <button className="hover:scale-125 duration-200">
                <Twitter />
              </button>
            </a>
            <a href="https://www.instagram.com/anshhhhjatana/" target="blank">
              <button className="hover:scale-125 duration-200">
                <Instagram />
              </button>
            </a>
          </div>
        </div>
      </div>
      <h3 className="text-white text-[30px] font-semibold uppercase text-center mt-[100px]">
        experience
      </h3>
      <p className="text-[20px] font-semibold text-center mt-2 text-[paleturquoise]">These are the technologies I've worked with</p>
      <div className="flex flex-wrap items-center justify-center mt-10 w-[70%]" id="buttons">
        <button className="hover:bg-white hover:text-black  flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <AiFillHtml5 size={28} color="#E74625" />
          HTML
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiCss3 size={24} color="#3057EC" />
          CSS
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <BiLogoJavascript size={28} color="#F5DD1B"/>
          JavaScript
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <FaReact size={28} color="#50A6BD"/>
          React.js
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiRedux size={28} color="#684CB2"/>
          Redux
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiTailwindcss size={28} color="#42A7B1"/>
          Tailwind CSS
        </button>
        <button className="hover:bg-white hover:text-black flex  items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiBootstrap size={28} color="#543C7A"/>
          Bootstrap
        </button>
        <button className="hover:bg-white hover:text-black flex   items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <BsGit size={28} color="#EE5032"/>
          Git
        </button>
        <button className="hover:bg-white hover:text-black flex  items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <AiFillGithub size={28} color="darkgray" />
          GitHub
        </button>
        <button className="hover:bg-white hover:text-black flex  items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <BsWordpress size={28} color="#63A4B9"/>
          Wordpress
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <TbBrandVscode size={28} color="#24ABF2"/>
          VS Code
        </button>
        <button className="hover:bg-white hover:text-black flex items-center p-1.5 px-2 m-4 font-semibold rounded-md bg-gray-900 text-white">
          <SiCanva size={28} color="#20BDC6"/>
          Canva
        </button>
      </div>
    </div>
  );
};

export default About;
