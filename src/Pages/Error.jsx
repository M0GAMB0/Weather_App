import { Footer } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Lost from "../assets/LOST.jpg";
const Error = () => {
  const history = useNavigate();
  return (
    <div>
      <div className=" flex justify-center items-center pt-1 px-6 md:px-10 h-full flex-col-reverse  sm:flex-row sm:pt-4">
        <div
          className="flex flex-col justify-between sm:justify-end items-start w-full"
          // style={{ border: "2px solid red" }}
        >
          <h1 className="font-black text-4xl md:text-7xl lg:text-8xl">Oops,</h1>
          <h1 className="font-black text-4xl pt-1.5 md:text-7xl lg:text-8xl">
            You are lost!
          </h1>
          <p className="text-xl pt-4 sm:mt-6">
            We are vey sorry for the inconvenient
          </p>
          <p className="text-xl pt-1 lg:w-9/12">
            It looks like you are trying to access the page that either has been
            deleted or never existed.
          </p>
          <button
            onClick={() => history("/")}
            className="text-xl px-10 mt-5 mb-4"
          >
            Go to Home
          </button>
        </div>
        <img
          src={Lost}
          alt="Lost"
          className="md:w-7/12 lg:w-5/12 sm:w-6/12 w-8/12"
          // style={{ border: "2px solid red" }}
        />
      </div>
      <div className="mt-5 w-full text-center">
        <a href="https://www.freepik.com/free-vector/404-error-lost-space-concept-illustration_20602746.htm#query=lost&position=46&from_view=search&track=sph">
          Image by storyset
        </a>{" "}
        on Freepik
      </div>
    </div>
  );
};

export default Error;
