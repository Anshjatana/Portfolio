import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiCanva,
  SiMui,
  SiExpress,
} from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { LampContainer } from "./ui/lamp";
// import { motion } from "framer-motion";

const technologies = [
  { Icon: AiFillHtml5, name: "HTML", color: "#E74625" },
  { Icon: SiCss3, name: "CSS", color: "#3057EC" },
  { Icon: BiLogoJavascript, name: "JavaScript", color: "#F5DD1B" },
  { Icon: FaReact, name: "React.js", color: "#50A6BD" },
  { Icon: TbBrandNextjs, name: "Next.js", color: "gray" },
  { Icon: BiLogoTypescript, name: "TypeScript", color: "#2F74C0" },
  { Icon: SiMui, name: "Material UI", color: "#007FFF" },
  { Icon: SiRedux, name: "Redux", color: "#684CB2" },
  { Icon: FaNodeJs, name: "Node.js", color: "#90CA51" },
  { Icon: SiExpress, name: "Express.js", color: "#828282" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#42A7B1" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#543C7A" },
  { Icon: BsGit, name: "Git", color: "#EE5032" },
  { Icon: AiFillGithub, name: "GitHub", color: "darkgray" },
  { Icon: SiCanva, name: "Canva", color: "#20BDC6" },
];

const Experience = () => {
  return (
    <div id="experience" className="h-full z-20">
      <div className="mb-4">
        <h3
          className="text-white text-[30px] font-semibold uppercase text-center mt-[100px]"
          id="heading"
        >
          Work Experience
        </h3>
        <div className=" flex justify-around items-center ">
          <div className="flex items-center justify-center gap-3 mt-6">
            <img
              src="https://res.cloudinary.com/doeqkxbmo/image/upload/v1712642608/web/Icons/uloy5mdkiat60stziju0.svg"
              className="w-[36px]"
              alt="wardrollLogo"
            />
            <a href="https://www.wardroll.com" target="blank">
              <p
                className="text-[22px] font-semibold text-center mt-2 text-white "
                id="exp-line"
              >
                Wardroll Pvt. Ltd.
              </p>
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <p
              className="text-[22px] font-medium text-center mt-2 text-white "
              id="exp-line"
            >
              (January, 2024 - Present)
            </p>
          </div>
        </div>
        <div className="text-center mt-6 gap-4 ">
          <p className="text-[22px] font-medium text-center mt-2 mb-6 text-[paleturquoise]">
            Roles and responsibilities
          </p>
          <p className="text-[20px] font-medium text-center mt-2 text-white">
            Frontend Developer Intern
          </p>
          <div
            id="role-description"
            className="mt-4 mx-auto w-[85%] sm:w-[70%] text-[12px] sm:text-[14px] md:text-[17px] text-center flex flex-col items-center justify-center  "
          >
            <li className="font-normal text-center mt-2 text-white">
              Led 90% of the frontend development of Wardroll's B2B SaaS product
              from scratch as the Founding Frontend Engineer, while also
              contributing to backend microservices to ensure high code quality
              and alignment with business needs.
            </li>
            <li className="font-normal text-center mt-2 text-white">
              Spearheaded the launch of amazing features, including personal
              affiliate links for fashion creators and Auto-DM functionalities,
              enhancing user engagement and creator monetization on the platform
            </li>
            <li className="font-normal text-center mt-2 text-white">
              Drove the development of Wardroll's user interface with a focus on
              innovation and scalability, seamlessly integrating advanced
              features that enhance user engagement and set new standards in the
              fashion tech industry
            </li>
          </div>
        </div>
      </div>
      <LampContainer className={'bg-black pt-[562px] h-[300px] '} >
        <h3
          className="text-white text-[30px] font-semibold uppercase text-center mt-[80px]"
          id="heading"
        >
          Tech Stack
        </h3>
        <p
          className="text-[20px] font-semibold text-center mt-2 text-[paleturquoise] "
          id="exp-line"
        >
          These are the technologies I've worked with
        </p>
        <div
          className="flex flex-wrap items-center justify-center  m-10 "
          id="buttons"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              id="tech-button"
              className="hover:bg-white gap-1 hover:text-black hover:scale-110 duration-200 flex items-center p-1.5 px-2 m-2 font-semibold rounded-md bg-gray-900 text-white"
            >
              <tech.Icon size={28} color={tech.color} id="icon" />
              {tech.name}
            </div>
          ))}
        </div>
      </LampContainer>
    </div>
  );
};

export default Experience;
