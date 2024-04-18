import React from "react";
import ProfileImg from "../assets/Profile.avif";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Download } from "lucide-react";
import resume from "../assets/Resume.pdf";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend developer", "Next.js developer", "React.js developer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <div className="h-[500px]" id="home">
      <div className="text-white w-[45%] absolute top-[130px] left-[100px]">
        <h1 className="text-[45px] font-semibold text-[#ff0044]" id="greeting">
          Hello!
        </h1>
        <h2 className="text-[40px] font-bold" id="Name">
          I'm Ansh Jatana,
        </h2>
        <h3 className="text-[30px] text-[paleturquoise]" id="profile">
          A{" "}
          <span className="text-[30px] text-[paleturquoise]" id="typewriter">
            {text}
          </span>
          <span>
            <Cursor />
          </span>
        </h3>

        <p className="text-[18px] my-4 text-[lightgray]" id="about-me">
          Proficient in frontend development technologies including React.js,
          Next.js, JavaScript, and TypeScript, while also delving into backend
          technologies to broaden expertise and contribute holistically to web
          development projects
        </p>
        <a href={resume} download="Resume">
          <button
            className="bg-[ivory] text-black p-2 rounded-md font-semibold mt-2 flex items-center justify-center  hover:scale-105 duration-200"
            id="download-btn"
          >
            <Download className="mr-2" id="download-icon" />
            Download Resume
          </button>
        </a>
      </div>
      <div
        className="relative top-[165px] float-right right-[130px]"
        id="hero-img"
      >
        <img
          src={ProfileImg}
          alt="Profile img"
          className="w-[300px] rounded-lg z-9"
        />
      </div>
    </div>
  );
};

export default Home;
