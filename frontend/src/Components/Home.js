import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { RingLoader } from "react-spinners";

import { useNavigate } from "react-router-dom";
export default function Home() {
  const [name, setName] = useState("");
  const [employeeid, setEmployeeid] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const [wage, setWage] = useState(0);
  const [employeelist, setEmployeelist] = useState([]);

  const addEmployee = () => {
    if (
      !name ||
      !employeeid ||
      !email ||
      !date ||
      !country ||
      !position ||
      !wage
    ) {
      alert("All fields are required");
      return;
    }
    setLoading(true);
    console.log("button clicked");
    axios
      .post("http://localhost:3001/create", {
        name: name,
        employeeid: employeeid,
        email: email,
        date: date, // Send the formatted date to the server
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => {
        console.log("Success");
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
   
  };



  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#0a192f]">
        <div className="p-1 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-red-600 ml-6">
            Employee Information
          </h1>
          {loading && (
            // Display ring loader only when loading state is true
            <div className="flex justify-center items-center h-screen">
              <RingLoader color="#36d68f" size={100} speedMultiplier={1} />
            </div>
          )}
          <form className=" shadow-md rounded text-white px-8 pt-6 pb-8 mb-1  opacity-1 border-zinc-100 ">
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm  mb-2 text-white ">
                Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="employeeId"
                className="block text-white  text-sm  mb-2"
              >
                Employee ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeId"
                type="text"
                placeholder="Enter employee ID"
                onChange={(e) => {
                  setEmployeeid(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-white text-sm  mb-2">
                Hire Date
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="date"
                placeholder="Enter email"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  console.log(setDate);
                }}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="country"
                className="block text-white text-sm  mb-2"
              >
                Country
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="Enter country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="position"
                className="block text-white text-sm  mb-2"
              >
                Position
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="position"
                type="text"
                placeholder="Enter position"
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="wage" className="block text-whitetext-sm  mb-2">
                Wage
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="wage"
                type="text"
                placeholder="Enter wage"
                onChange={(e) => {
                  setWage(e.target.value);
                }}
              />
            </div>

            <div className="mb-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded focus:outline-none focus:shadow-outline"
                onClick={addEmployee}
              >
               
                Save employee
              </button>   
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
