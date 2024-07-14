import React from "react";
import memoji from "../assets/memoji.webp";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";
import { CardContainer } from "./ui/3d-card";
// import { Meteors } from "./ui/meteors";

const About = () => {
  return (
    <div className="flex flex-col z-20 items-center justify-center mt-8 mb-14 sm:mb-2 " id="about">
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
      <CardContainer className="inter-var"><img src={memoji} alt="memoji" className="h-[400px]" id="memoji" /></CardContainer>
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
          <div className="flex justify-between text-white items-center w-[200px] mt-6 ">
            <LinkPreview url="https://www.linkedin.com/in/ansh-jatana-10b446205/">
              <a
                href="https://www.linkedin.com/in/ansh-jatana-10b446205/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="hover:scale-125 text-white duration-200">
                  <Linkedin className="icons text-white" />
                </button>
              </a>
            </LinkPreview>
            <LinkPreview url="https://github.com/Anshjatana">
              <a href="https://github.com/Anshjatana" target="_blank" rel="noreferrer">
                <button className="hover:scale-125 text-white duration-200">
                  <Github className="icons text-white" />
                </button>
              </a>
            </LinkPreview>
            <LinkPreview url="https://twitter.com/anshh_jatana">
              <a href="https://twitter.com/anshh_jatana" target="_blank" rel="noreferrer">
                <button className="hover:scale-125 text-white duration-200">
                  <Twitter className="icons text-white" />
                </button>
              </a>
            </LinkPreview>
            <LinkPreview url="https://www.instagram.com/anshhhhjatana/">
              <a
                href="https://www.instagram.com/anshhhhjatana/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="hover:scale-125 text-white duration-200">
                  <Instagram className="icons text-white" />
                </button>
              </a>
            </LinkPreview>
          </div>
        </div>
      </div>
      {/* <BackgroundBeams/> */}
    </div>
  );
};

export default About;
