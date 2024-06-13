import React from "react";
import { ArrowRight, Link, Github } from "lucide-react";
import CollegeWebsite from "../assets/CollegeWebsite.avif";
import ExpenseApp from "../assets/Expense-app.avif";
import CryptoBazar from "../assets/CryptoBazar.avif";
import NinjaStudio from "../assets/NinjaStudio.avif";

const projects = [
  {
    name: "CryptoBazar",
    image: CryptoBazar,
    technologies: "React.js, Tailwind CSS, CoinGecko APIs",
    description: [
      "CryptoBazar presents a diverse selection of 10 cryptocurrencies on its homepage, offering real-time data and trends to users",
      "Providing in-depth insights, it includes dedicated routes to individual coin pages, allowing users to study comprehensive market data for each cryptocurrency",
      "Enhancing user experience, it offers both light and dark theme modes, ensuring accessibility and personalized preferences for every user.",
    ],
    liveURL: "https://cryptobazar-ansh.netlify.app/",
    githubURL: "https://github.com/Anshjatana/CryptoBazar",
  },
  {
    name: "Expense Tracker App",
    image: ExpenseApp,
    technologies: "React.js, Tailwind CSS",
    description: [
      "Created a small expense Tracker app where we can Create, edit and delete particular expense.",
      "All the expenses can be filtered according to date.",
      "Also we can search it by Expense name.",
    ],
    liveURL: "https://expense-tracker-ansh.netlify.app/",
    githubURL: "https://github.com/Anshjatana/Expense-Tracker-app",
    reverse: true,
  },
  {
    name: "College website",
    image: CollegeWebsite,
    technologies: "React.js, Tailwind CSS, Rapid APIs",
    description: [
      "Created a College dummy website using React.js and Tailwind CSS",
      "Added Graphs using Fetch API, Table with filters and Cards using props.",
      "Added Responsiveness by using Tailwind CSS Media Queries",
    ],
    liveURL: "https://arsd-dummy-ansh.netlify.app/",
    githubURL: "https://github.com/Anshjatana/CollegeWebsite",
  },
  // {
  //   name: "Ninja Studio",
  //   image: NinjaStudio,
  //   technologies: "HTML, CSS, JavaScript, Bootstrap",
  //   description: [
  //     "Created Home Screen Carousel using HTMl, CSS, JS",
  //     "Added favourite and recent played songs sections using JavaScript functions",
  //     "Added play/pause and next/previous functionality to the player section.",
  //     "Ensured good code quality in terms of using classes, proper names for classes/variables.",
  //   ],
  //   liveURL: "https://ninjastudio-ansh.netlify.app/",
  //   githubURL: "https://github.com/Anshjatana/NINJA-STUDIO-HTML-CSS-JS",
  //   reverse: true,
  // },
];

const Projects = () => {
  return (
    <div id="projects">
      <h3
        className="text-white text-[30px]  font-semibold uppercase text-center mt-20 "
        id="heading"
      >
        Projects
      </h3>
      <p
        className="text-[20px] font-semibold text-center mt-2 text-[paleturquoise]"
        id="exp-line"
      >
        Check out some of my work right here
      </p>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex ${project.reverse ? "flex-row-reverse" : ""} justify-evenly my-16 mx-10 items-center`}
          id="project-div"
        >
            <a href={project.liveURL} target="_blank" rel="noreferrer" id="project-image" className="w-[47%]" ><img
              src={project.image}
              alt={project.name}
              
              className=" rounded-md hover:scale-105 duration-200"
            />
            </a>
          <div
            className="text-white text-[16px] w-[42%] mt-8"
            id="project-text"
          >
            <h3 className="text-[32px] font-bold mb-2 " id="Project-heading">
              {project.name}
            </h3>
            <p className="font-bold text-[paleturquoise] text-[16px]">
              Technology used: {project.technologies}
            </p>
            {project.description.map((desc, idx) => (
              <p key={idx} className="flex mt-3 ">
                <ArrowRight className="mr-2" />
                {desc}
              </p>
            ))}
            <br />
            <div
              className="flex justify-evenly  w-[290px]"
              id="project-buttons"
            >
              <a href={project.liveURL} target="blank">
                <button className="flex items-center bg-white p-1.5 font-semibold text-black rounded-md hover:bg-gray-100 hover:scale-105 duration-200">
                  <Link />
                  Live URL
                </button>
              </a>
              <a href={project.githubURL} target="blank">
                <button className="flex items-center bg-white font-semibold p-1.5 text-black rounded-md hover:bg-gray-100 hover:scale-105 duration-200">
                  <Github />
                  GitHub Link
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
