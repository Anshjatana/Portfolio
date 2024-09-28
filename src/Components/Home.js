import React from "react";
import ProfileImg from "../assets/Profile.avif";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Download } from "lucide-react";
import resume from "../assets/Resume.pdf";
import { CardContainer } from "./ui/3d-card";
// import { FlipWords } from "./ui/flip-words";
// import { BackgroundGradient } from "./ui/background-gradient";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend developer", "Next.js developer", "React.js developer"],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 20,
  });

  return (
    <div className="flex items-center mb-16 mt-32 mx-10 justify-around z-20">
      <div className="text-white w-[80%] text-center md:text-left sm:w-[60%]  ">
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

        <p className="text-[18px] md:w-[60%]  my-4 text-[lightgray]" id="about-me">
          Proficient in Frontend development technologies including React.js,
          Next.js, JavaScript, and TypeScript, while also delving into backend
          technologies to broaden expertise and contribute holistically to SaaS products.
        </p>
        <a href={resume} className="hover:cursor-pointer z-100" download="Resume">
          <div
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            id="download-btn"
          >
            Download Resume
            <Download className="ml-2" id="download-icon" />
          </div>
        </a>
      </div>
      <div
        className="w-[15vw] hidden md:flex items-center justify-center"
      >
        {/* <BackgroundGradient className="rounded-[22px] max-w-sm overflow-hidden bg-white dark:bg-zinc-900"> */}
        <CardContainer className="inter-var">
          <img
            src={ProfileImg}
            alt="Profile img"
            className="rounded-xl z-9"
          />
          </CardContainer>
        {/* </BackgroundGradient> */}
      </div>
    </div>
  );
};

export default Home;
