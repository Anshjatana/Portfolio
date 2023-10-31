import React from "react";
import { ArrowRight, Link, Github } from "lucide-react";
import CollegeWebsite from "../assets/CollegeWebsite.avif";
import ExpenseApp from "../assets/Expense-app.avif";
import RegistrationInterface from "../assets/RegistrationInterface.avif";
import NinjaStudio from "../assets/NinjaStudio.avif";

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
      
      <div
        className="flex justify-evenly mb-24 mt-12 mx-4 items-center"
        id="project-div"
      >
      
        <img
          src={CollegeWebsite}
          alt="College website"
          id="project-img13"
          className="w-[40%] ml-10 mt-10 rounded-md hover:scale-110 duration-200"
        />
        <div className="text-white text-[18px] w-[42%] mt-6" id="project-text">
        <h3 className="text-[32px] font-bold mb-2 " id="Project-heading">College website</h3>
          <p className="font-bold text-[#ff0044] text-[16px]">
            Technology used: React.js, Tailwind CSS, Rapid APIs
          </p>
          <p className="flex mt-6">
            <ArrowRight />
            Created a College dummy website using React.js and Tailwind CSS
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            Added Graphs using Fetch API, Table with filters and Cards using
            props.
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            Added Responsiveness by using Tailwind CSS Media Queries
          </p>
          <br />
          <div className="flex justify-evenly w-[290px]" id="project-buttons">
            <a href="https://arsd-dummy-ansh.netlify.app/" target="blank">
              <button className="flex items-center bg-white p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Link />
                Live URL
              </button>
            </a>
            <a
              href="https://github.com/Anshjatana/CollegeWebsite"
              target="blank"
            >
              <button className="flex items-center bg-white font-semibold p-1.5 text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Github />
                GitHub Link
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center my-24 mx-10 flex-row-reverse items-center"
        id="project-div"
      >
        <img
          src={ExpenseApp}
          alt="ExpenseApp"
          id="project-img24"
          className="w-[40%] ml-10 mt-10 rounded-md hover:scale-110 duration-200"
        />
        <div className="text-white text-[18px] w-[42%] mt-8" id="project-text">
        <h3 className="text-[32px] font-bold mb-2 " id="Project-heading">Expense Tracker App</h3>
          <p className="font-bold text-[paleturquoise] text-[16px]">
            Technology used: React.js, Tailwind CSS
          </p>
          <p className="flex mt-6">
            <ArrowRight />
            Created a small expense Tracker app where we can Create, edit and
            delete particular expense.
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            All the expenses can be filtered according to date.{" "}
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            Also we can search it by Expense name.
          </p>
          <br />
          <div className="flex justify-evenly w-[290px]" id="project-buttons">
            <a href="https://expense-tracker-ansh.netlify.app/" target="blank">
              <button className="flex items-center bg-white p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Link />
                Live URL
              </button>
            </a>
            <a
              href="https://github.com/Anshjatana/Expense-Tracker-app"
              target="blank"
            >
              <button className="flex items-center bg-white font-semibold p-1.5 text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Github />
                GitHub Link
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex justify-evenly my-24 mx-10 items-center"
        id="project-div"
      >
        <img
          src={RegistrationInterface}
          alt="RegistrationInterface"
          id="project-img13"
          className="w-[40%] ml-10 mt-10 rounded-md hover:scale-110 duration-200"
        />
        <div className="text-white text-[18px] w-[42%] mt-8" id="project-text">
        <h3 className="text-[32px] font-bold mb-2 " id="Project-heading">Event Registration Interface</h3>
          <p className="font-bold text-[#ff0044] text-[16px]">
            Technology used: React.js
          </p>
          <p className="flex mt-6">
            <ArrowRight />
            Created interactive event registration in React.js, ensuring seamless user experience and robust form validation.
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            Developed a Registered Users List displaying names with timestamps, offering a user-friendly "View Details" option via a popup.
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            Implemented Local Storage for persistent data storage, ensuring efficient data retrieval and display upon application state updates.
          </p>
          <br />
          <div className="flex justify-evenly  w-[290px]" id="project-buttons">
            <a href="https://registration-interface-ansh.netlify.app/" target="blank">
              <button className="flex items-center bg-white p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Link />
                Live URL
              </button>
            </a>
            <a href="https://github.com/Anshjatana/Event-Registration-Interface" target="blank">
              <button className="flex items-center bg-white font-semibold p-1.5 text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Github />
                GitHub Link
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center flex-row-reverse my-24 mx-10 items-center"
        id="project-div"
      >
        <img
          src={NinjaStudio}
          alt="Ninja Studio"
          id="project-img24"
          className="w-[40%] ml-10 mt-10 rounded-md hover:scale-110 duration-200"
        />
        <div className="text-white text-[18px] w-[42%] mt-10" id="project-text">
        <h3 className="text-[32px] font-bold mb-2 " id="Project-heading">Ninja Studio</h3>
          <p className="font-bold text-[paleturquoise] text-[16px]">

            Technology: HTML, CSS, JavaScript, Bootstrap
          </p>
          <p className="flex mt-6">
            <ArrowRight />
            Created Home Screen Carousel using HTMl, CSS, JS
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            Added favourite and recent played songs sections using JavaScript
            functions
          </p>
          <p className="flex mt-2">
            <ArrowRight />
            Added play/pause and next/previous functionality to the player
            section.
          </p>

          <p className="flex mt-2">
            <ArrowRight />
            Ensured good code quality in terms of using classes, proper names
            for classes/variables.
          </p>
          <br />
          <div
            className="flex justify-evenly items-center w-[290px]"
            id="project-buttons"
          >
            <a href="https://ninjastudio-ansh.netlify.app/" target="blank">
              <button className="flex items-center bg-white p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Link />
                Live URL
              </button>
            </a>
            <a
              href="https://github.com/Anshjatana/NINJA-STUDIO-HTML-CSS-JS"
              target="blank"
            >
              <button className="flex items-center bg-white font-semibold p-1.5 text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200">
                <Github />
                GitHub Link
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
