import React from "react";
import ProfileImg from "../assets/Profile.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../assets/Ansh-latest-cv.pdf"
const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend developer","React developer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <div className="h-[600px]">
      <div className="text-white w-[45%] absolute top-[190px] left-[130px]">
        <h1 className="text-[45px] font-semibold text-[#ff0044]">Hello!</h1>
        <h2 className="text-[40px] font-bold">I'm Ansh Jatana,</h2>
        <h3 className="text-[30px] text-[paleturquoise]">
          A <span className="text-[30px] text-[paleturquoise]">{text}</span>
          <span>
            <Cursor  />
          </span>
        </h3>

        <p className="text-[18px] my-4 text-[lightgray]">
          I possess a robust grasp of HTML, CSS, JavaScript, React.js and Redux. My
          proficiency lies in crafting captivating, user-centric websites. Eager
          for challenges and collaborative work with fellow professionals.
        </p>
        <a href={resume} download="Resume">
        <button className="bg-darkturquoise text-black p-2 rounded-md font-semibold mt-2  hover:scale-105 duration-200">Download Resume</button>
        </a>
      </div>
      <div className="relative top-[200px] float-right right-[180px]">
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
