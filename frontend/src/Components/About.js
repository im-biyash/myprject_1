import React from "react";
import Navbar from "./Navbar";
import myphoto from "../Assets/myphoto.png";
export default function About() {
  return (
    <div className="bg-[#0a192f] min-h-screen ">
      <Navbar />
      <div className="flex items-center justify-around relative top-[150px] ">
        <div className="left">
          <h1 className="text-red-500 text-2xl">FEATURES</h1>
          <ul className="text-white gap-2 list-disc text-lg ">
            <li>Record employee information</li>
            <li>Update and delete employee data</li>
            <li>Table view for easy data management</li>
            <li>Searching feature for finding data of particular employee</li>
            <li>
              enables sorting to sort datas according to name wages or salary
            </li>
            <li>Print table as pdf</li>
          </ul>
        </div>
        <div className="right">
          <h1 className="text-red-500 text-2xl items-center">About</h1>
          <p className="text-white border-1 text-lg border-blue-700 rounded-xl w-[500px] bg-slate-600 p-3 hover:bg-slate-500 transition-all duration-300">
            Welcome to our Employee Record Application—a secure web-based
            platform designed for efficient management of employee information.
            Administrators can easily perform CRUD operations, recording new
            hires, updating details, and removing records as needed. The system
            ensures data accuracy by storing comprehensive employee profiles,
            covering names, email addresses, addresses, hire dates, positions,
            and salaries. The intuitive dashboard and interactive tables provide
            a user-friendly interface for seamless data navigation. Built with
            React.js, Node.js, and MySQL, our application guarantees
            scalability, security, and high-performance data handling.
          </p>
        </div>
      </div>
      <div className="developers-info relative top-[200px] mt-8 pt-2 h-screen">
        <h1 className="text-red-700 ml-9 text-2xl">Developers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-6 w-auto">
          <div className="p-2 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c] ">
            <img
              src={myphoto}
              alt="photo"
              className="h-[200px] w-auto mx-auto"
            ></img>
            <h1 className="text-white font-bold text-2xl mt-2">
              Biyash Shrestha
            </h1>
            <p className="text-white mt-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              harum, est aliquam, rerum libero iure beatae at voluptatum
              placeat, eligendi eius? Officiis, ex aperiam?
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
            <h1 className="text-white text-2xl mt-2">Projal Khadka</h1>
            <p className="text-white mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              harum, est aliquam, rerum libero iure beatae at voluptatum
              placeat, eligendi eius? Officiis, ex aperiam?
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
            <h1 className="text-white text-2xl mt-2">Ashum bhuju</h1>
            <p className="text-white mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              harum, est aliquam, rerum libero iure beatae at voluptatum
              placeat, eligendi eius? Officiis, ex aperiam?
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
            <h1 className="text-white text-2xl mt-2">Nabin joshi</h1>
            <p className="text-white mt-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              harum, est aliquam, rerum libero iure beatae at voluptatum
              placeat, eligendi eius? Officiis, ex aperiam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
