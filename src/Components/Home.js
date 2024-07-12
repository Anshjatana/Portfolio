import React from "react";
import ProfileImg from "../assets/Profile.avif";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Download } from "lucide-react";
import resume from "../assets/Resume.pdf";
import { BackgroundGradient } from "./ui/background-gradient";

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
          I'm Ansh Jatana
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
        <a href={resume} className="hover:cursor-pointer z-20" download="Resume">
          <div
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-lightgray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            id="download-btn"
          >
            Download Resume
            <Download className="ml-2" id="download-icon" />
          </div>
        </a>
      </div>
      <div
        className="relative top-[165px] float-right right-[130px]"
        id="hero-img"
      >
        <BackgroundGradient className="rounded-[22px] max-w-sm overflow-hidden bg-white dark:bg-zinc-900">
          <img
            src={ProfileImg}
            alt="Profile img"
            className="w-[300px] rounded-lg z-9"
          />
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Home;
