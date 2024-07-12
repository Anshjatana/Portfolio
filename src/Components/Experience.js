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
import { CardContainer, CardItem } from "./ui/3d-card";

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
    <div id="experience">
      <div>
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
              (Dec, 2023 - Present)
            </p>
          </div>
        </div>
        <div className="text-center mt-6 gap-4 ">
          <p className="text-[22px] font-medium uppercase text-center mt-2 mb-6 text-[paleturquoise]">
            Roles and responsibilities
          </p>
          <p className="text-[20px] font-medium text-center mt-2 text-white">
            Frontend Developer Intern
          </p>
          <div id="role-description" className="mt-4 mx-auto w-[70%] text-center flex flex-col items-center justify-center  ">
            <li className="text-[17px] font-normal text-center mt-2 text-white">
            Joined Wardroll as a Founding Member, pioneering frontend development from scratch. Aligned closely with strategic goals and industry best practices, ensuring Wardroll's technology stands at the pinnacle of innovation.
            </li>
            <li className="text-[17px] font-normal text-center mt-2 text-white">
            Took charge of UI development with an insatiable drive, mastering the latest tech stack including Next.js, TypeScript, Material UI, and Tailwind CSS. Demonstrated unwavering determination to elevate Wardroll's interface to unprecedented heights.
            </li>
            <li className="text-[17px] font-normal text-center mt-2 text-white">
            Ensured Wardroll's success with a focus on scalability and performance. Expertly integrated Meta APIs while maintaining top-tier code standards, delivering an unparalleled user experience that sets a new industry standard.
            </li>
          </div>
        </div>
      </div>
      <div>
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
            <CardContainer className="inter-var"><CardItem
            translateZ="50"
              key={index}
              className="hover:bg-white gap-1 hover:text-black hover:scale-110 duration-200 flex items-center p-1.5 px-2 m-3 font-semibold rounded-md bg-gray-900 text-white"
            >
              <tech.Icon size={28} color={tech.color} id="icon" />
              {tech.name}
            </CardItem>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
