import React, { Fragment, useState } from "react";
import { data } from "../data/data.js";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Work = () => {
  const project = data;

  return (
    <Fragment>
      <div
        className="w-full h-[100%] text-gray-300 "
        style={{ background: "rgba(0,0,0,1)" }}
      >
        <div name="work" className="p-10"></div>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <ScrollAnimation animateIn="fadeIn" duration={2.1}>
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-regal-brown">
                Work
              </p>
              <p className="py-6 text-xl">Check out some of my projects</p>
            </div>
            {/* container for projects */}
            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-12">
              {/* Gird Item */}
              {project.map((item, index) => (
                <div className="">
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      filter: "brightness(0.5)",
                    }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
                  >
                    {/* Hover effect for images */}
                    <div className="opacity-0 group-hover:opacity-100">
                      <span className="text-2xl font bold text-white tracking-wider ">
                        {item.desc}
                      </span>
                      <div className="pt-8 text-center ">
                        {/* eslint-disable-next-line */}
                        <a href={item.github} target="_blank">
                          <button
                            disabled
                            className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-200 font-bold text-lg"
                          >
                            Code
                          </button>
                        </a>
                        {/* eslint-disable-next-line */}
                        <a href={item.live} target="_blank">
                          
                          <button
                            disabled={!item.live}
                            className={`text-center rounded-lg px-4 py-3 m-2
                     bg-white ${!item.live ? "text-gray-200" : "text-black"}  font-bold text-lg`}
                          >
                            Live
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul className=" min-h-[150px] flex flex-col  items-baseline justify-start p-0 m-0">
                    <li className="p-0 m-0 text-xl text-[#fafafa] font-semibold py-3">
                      {item.name}
                      <span className="bg-regal-brown text-black text-sm rounded py-[2px] px-[10px] font-semibold ml-4">
                        {item.modeOfProject}
                      </span>
                    </li>
                    <li className="p-0 m-0 text-l text-[#fafafa] pb-3">
                      {item.details}
                    </li>
                    <ul className="flex flex-row gap-2 flex-wrap">
                      {item.expi.map((i) => (
                        <li className="bg-[#1F2937] text-[#9CA3AF] rounded py-[2px] px-[10px] font-semibold">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </ul>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Fragment>
  );
};

export default Work;
