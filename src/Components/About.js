import React from "react";
import memoji from "../assets/memoji.webp";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";

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
            Every day, I enjoy discovering new ways to make websites shine. Even
            though I didn't begin with tech knowledge, I've taught myself to
            code, and now I'm skilled at it. I utilize tools like Material UI,
            Shad CN, and Tailwind CSS to enhance websites' appeal, while also
            employing Next.js, TypeScript, React.js, and JavaScript to ensure
            good quality code.
          </p>
          <br />
          <p>
            I focus on user experience, customizing every part of the website
            for seamless interaction. Exploring backend tech like Cloudflare
            workers, AWS deployment, Docker, and Nginx keeps me up-to-date. My
            curiosity fuels my drive to learn and grow in technology.
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
     
      </div>
  );
};

export default About;
