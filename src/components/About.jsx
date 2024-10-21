import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { HiOutlinePhone } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
const About = () => {
  return (
    <div
      className="w-full h-[100%]  text-gray-300 pb-60"
      style={{ background: "rgba(0,0,0,0.8)" }}
    >
      <div name="about" className="p-10"></div>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <ScrollAnimation animateIn="fadeIn" duration={2.1}>
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-regal-brown">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-20">
            <div className="sm:text-left text-xl font-bold">
              <p className="pb-10">
                Hi. I'm Christian Jerr Buarao, nice to meet you. Please take a
                look around.
              </p>
              <p className="flex justify-start items-center pb-2">
                <span className="text-regal-brown pr-2">
                  <HiMail />
                </span>
                <span>christianjerrbuarao@gmail.com</span>
              </p>
              <p className="flex justify-start items-center pb-2">
                <span className="text-regal-brown pr-2">
                  <HiOutlinePhone />
                </span>
                <span>09950177255</span>
              </p>
              <p className="flex justify-start items-center pb-2">
                <span className="text-regal-brown pr-2">
                  <HiLocationMarker />
                </span>
                <span>10 Capt. Sindo St. Jesus Delapena Marikina City</span>
              </p>
            </div>
            <div>
              <p className="text-xl">
                A skilled front-end developer with more than <bold>five</bold>{" "}
                years of experience in building websites and web applications.
                Well-versed in Agile methodology and responsive UI design.
                Possesses strong problems-solving abilities and a keen interest
                in staying current with industry trends.
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] w-full  pb-20 px-4">
            <h1 className="p-0 m-0 text-2xl text-[#fafafa] font-semibold py-3 pb-10 flex items-center gap-2">
              <p className="text-regal-brown">
                <HiBriefcase />
              </p>
              Experience
            </h1>
            <ul className="pb-10">
              <li className="font-bold text-xl m-0 p-0">
                Software Development Senior Analyst
              </li>
              <li className="font-bold text-xl p-0 m-0 ">Accenture</li>
              <li className="font-bold text-xl p-0 m-0 text-regal-brown">
                2021 - Present
              </li>
            </ul>
            <ul className="pb-10">
              <li className="font-bold text-xl p-0 m-0 ">
                Senior Front end developer
              </li>
              <li className="font-bold text-xl p-0 m-0 ">
                Transcosmos Asia Philippines
              </li>
              <li className="font-bold text-xl p-0 m-0 text-regal-brown">
                2019 - 2021
              </li>
            </ul>
            <ul>
              <li className="font-bold text-xl p-0 m-0 ">
                Front end developer
              </li>
              <li className="font-bold text-xl p-0 m-0 ">
                Transcosmos Tokyo Japan
              </li>
              <li className="font-bold text-xl p-0 m-0 text-regal-brown">
                2019 - 2019 ( August - November )
              </li>
            </ul>
          </div>
          <div className="max-w-[1000px] w-full px-4">
            <h1 className="p-0 m-0 text-2xl text-[#fafafa] font-semibold py-3 pb-10 flex items-center gap-2">
              <p className="text-regal-brown">
                <HiAcademicCap />
              </p>
              Education
            </h1>
            <ul>
              <li className="font-bold text-xl p-0 m-0 ">
                Access Computer College
              </li>
              <li className="font-bold text-xl p-0 m-0 ">
                Bachelor of Science in Information Technology
              </li>
              <li className="font-bold text-xl p-0 m-0 text-regal-brown">
                2016 - 2019
              </li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
