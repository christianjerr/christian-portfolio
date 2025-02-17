import React from "react";
import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <ScrollAnimation animateIn="fadeIn" duration={2.1}>
          <p className="text-[#c6bd7d] text-lg">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Christian Jerr Buarao
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a <span className=" text-[#c6bd7d]">full-stack developer</span>.
          </h2>

          <p className="text-white py-4 max-w-[700px] text-xl">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "A Web developer with 5+ years of experience in creating websites and web applications for some pretty cool companies, I strive to build visually appealing and high-performing websites.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={70}
              style={{ fontSize: "20px", display: "inline-block" }}
            />
          </p>
          <div className="flex gap-3 flex-col sm:flex-row">
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-regal-brown hover:border-regal-brown w-[230px]">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>

            <a
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-regal-brown hover:border-regal-brown w-[230px]"
              href={require("./resume.pdf")}
              download={"resume.pdf"}
            >
              Download resume <HiDownload className="ml-3 " />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Home;
