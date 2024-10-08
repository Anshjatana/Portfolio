import React from "react";
import { ArrowRight, Link, Github } from "lucide-react";
// import CollegeWebsite from "../assets/CollegeWebsite.avif";
import ExpenseApp from "../assets/Expense-app.avif";
import CryptoBazar from "../assets/CryptoBazar.avif";
import Wardroll from "../assets/Wardroll-Landing.avif";
import Melodyverse from "../assets/MelodyVerse.avif";
import Booksmart from "../assets/Booksmart.avif";
import GitPulse from "../assets/GitpulseLight.avif";
import { CardContainer } from "./ui/3d-card";
import npmPackage from "../assets/npm.avif";
// import NinjaStudio from "../assets/NinjaStudio.avif";

const projects = [
  {
    name: "Saas Product @Wardroll",
    image: Wardroll,
    technologies:
      "Next.js, TypeScript, Material UI, Tailwind CSS, Sentri, Google Analytics",
    description: [
      "Spearheaded the UI development, enthusiastically mastering Next.js, TypeScript, Material UI, and Tailwind CSS to create a state-of-the-art interface.",
      "Guaranteed scalability and seamless integration with Meta APIs, maintaining top-tier code standards to deliver peak performance and an exceptional user experience.",
      "Pioneered the frontend development from the ground up, aligning with strategic objectives and industry best practices through close collaboration with the CTO.",
    ],
    liveURL: "https://www.wardroll.com",
  },
  {
    name: "Git Pulse",
    image: GitPulse,
    technologies: "React.js, Tailwind CSS, GitHub REST APIs, Chart.js, Axios",
    description: [
      "Built a sleek web app with GitHub REST APIs, giving users a unique, personalized view of their GitHub data.",
      "Created dazzling visuals for followers, repos, languages, and forks using top-tier libraries and tech.",
      "Achieved seamless, fast access to complex GitHub data, setting new standards in web development.",
    ],
    liveURL: "https://gitpulse-anshh.netlify.app/",
    githubURL: "https://github.com/Anshjatana/Git-Pulse",
    reverse: true,
  },
  {
    name: "Format your Date",
    image: npmPackage,
    technologies: "TypeScript, Node.js",
    description: [
      "Maintained and contributed the format-your-date package to the NPM registry, Reached 500+ downloads in the first week, showcasing its immediate utility.",
      "Built with TypeScript, ensuring type safety and compatibility across modern JavaScript environments for smooth, reliable performance.",
      "Offers customizable separators and lightweight functionality, allowing developers to integrate flexible date formatting without performance overhead.",
    ],
    liveURL: "https://www.npmjs.com/package/format-your-date",
    githubURL: "https://github.com/Anshjatana/format-your-date",
  },
  {
    name: "MelodyVerse",
    image: Melodyverse,
    technologies:
      "Next.js, Node.js, Express.js, Zustand, Tailwind CSS, MongoDB, JWT",
    description: [
      "Implemented secure, token-based access to protected routes, ensuring a smooth user experience with a focus on usability and responsiveness.",
      "Manages user authentication and data validation, providing reliable API endpoints for login and signup, with efficient database communication",
    ],
    liveURL: "https://melodyverse.anshjatana.online",
    githubURL: "https://github.com/Anshjatana/melody-verse-frontend",
    reverse: true,
  },
  {
    name: "CryptoBazar",
    image: CryptoBazar,
    technologies:
      " React.js, Tailwind CSS, CoinGecko APIs, Express.js, WebSocket",
    description: [
      "CryptoBazar offers a dynamic selection of 10 cryptocurrencies on its homepage, powered by WebSocket for real-time data and trends, keeping users updated with live market action.",
      "With dedicated routes to individual coin pages, it provides detailed market insights for each cryptocurrency, empowering informed investment decisions.",
      "Customizable light and dark themes enhance user experience, offering accessibility and personalization for a seamless crypto journey.",
    ],
    liveURL: "https://cryptobazar-ansh.netlify.app/",
    githubURL: "https://github.com/Anshjatana/CryptoBazar",
  },
  {
    name: "Books Mart",
    image: Booksmart,
    technologies: "Next.js, Zustand, Tailwind CSS, Lucid Icons",
    description: [
      "Books Mart is a Next.js-based e-commerce site featuring a responsive product grid, shopping cart system, and smooth UI/UX animations for a seamless shopping experience.",
      "Users can add, remove, and adjust product quantities in the cart, with discount options and safeguards to prevent quantity errors.",
    ],
    liveURL: "https://books-mart-ansh.netlify.app/",
    githubURL: "https://github.com/Anshjatana/books-mart",
    reverse: true,
  },
  {
    name: "Expense Tracker App",
    image: ExpenseApp,
    technologies: "React.js, Tailwind CSS",
    description: [
      "Developed a user-friendly app for creating, editing, and deleting expenses effortlessly.",
      "Includes filtering by date and searching by expense name for precise expense tracking.",
      "Offers a seamless user experience with an intuitive design, ensuring easy navigation and control over expenses.",
    ],
    liveURL: "https://expense-tracker-ansh.netlify.app/",
    githubURL: "https://github.com/Anshjatana/Expense-Tracker-app",
  },
  // {
  //   name: "College website",
  //   image: CollegeWebsite,
  //   technologies: "React.js, Tailwind CSS, Rapid APIs",
  //   description: [
  //     "Created a College dummy website using React.js and Tailwind CSS",
  //     "Added Graphs using Fetch API, Table with filters and Cards using props.",
  //     "Added Responsiveness by using Tailwind CSS Media Queries",
  //   ],
  //   liveURL: "https://arsd-dummy-ansh.netlify.app/",
  //   githubURL: "https://github.com/Anshjatana/CollegeWebsite",
  // },
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
    <>
      <div id="projects" className="z-20">
        <h3
          className="text-white text-[30px]  font-semibold uppercase text-center mt-10 "
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
            className={`flex ${
              project.reverse ? "flex-row-reverse" : ""
            } justify-evenly my-16 mx-10 items-center`}
            id="project-div"
          >
            <a
              href={project.liveURL}
              target="_blank"
              rel="noreferrer"
              id="project-image"
              className="w-[47%]"
            >
              <CardContainer className="inter-var">
                <img
                  src={project.image}
                  alt={project.name}
                  className=" rounded-md hover:scale-110 duration-150 "
                />
              </CardContainer>
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
                className="flex justify-between  w-[290px]"
                id="project-buttons"
              >
                <a href={project.liveURL} target="blank">
                  <button className="flex items-center bg-white p-1.5 font-semibold text-black rounded-md hover:bg-gray-100 hover:scale-105 duration-200">
                    <Link />
                    Live URL
                  </button>
                </a>
                {project.githubURL && (
                  <a href={project.githubURL} target="blank">
                    <button className="flex items-center bg-white font-semibold p-1.5 text-black rounded-md hover:bg-gray-100 hover:scale-105 duration-200">
                      <Github />
                      GitHub Link
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
