import React from "react";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";
import { CardContainer } from "./ui/3d-card";
// import { FlipWords } from "./ui/flip-words";
// import { Meteors } from "./ui/meteors";

const About = () => {
  return (
    <div
      className="flex flex-col z-20 items-center justify-center mt-8 mb-14 sm:mb-2 "
      id="about"
    >
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
        <CardContainer className="inter-var">
          <img src={'https://res.cloudinary.com/dywhcxdix/image/upload/v1732440380/Portfolio_assets/ng9fm2fjwizm16hioyi7.webp'} alt="memoji" className="h-[400px]" id="memoji" />
        </CardContainer>
        <div
          className="text-white text-[17px] w-[50%]  mt-[60px] "
          id="about-text"
        >
          <p>
            I'm a self-taught Developer with expertise in React.js, Next.js, and
            TypeScript. I focus on creating intuitive, seamless user experiences
            while also exploring backend development and DevOps. As the founding
            frontend engineer at Wardroll, I played a key role in building their
            B2B SaaS platform from the ground up.
          </p>
          <br />
          <p>
            Driven by a passion for innovation, I love tackling new challenges
            and pushing boundaries in tech. With projects like GitPulse and
            MelodyVerse under my belt, I'm always looking for ways to enhance
            user engagement and deliver impactful, scalable solutions.
          </p>
          <br />
          <h3
            className="text-[30px] font-semibold text-[paleturquoise]"
            id="lets-connect"
          >
            Lets Catch Up!
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
              <a
                href="https://github.com/Anshjatana"
                target="_blank"
                rel="noreferrer"
              >
                <button className="hover:scale-125 text-white duration-200">
                  <Github className="icons text-white" />
                </button>
              </a>
            </LinkPreview>
            <LinkPreview url="https://twitter.com/anshh_jatana">
              <a
                href="https://twitter.com/anshh_jatana"
                target="_blank"
                rel="noreferrer"
              >
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
