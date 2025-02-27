import React, { Fragment } from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import generative from "../assets/generative-ai.jpg";
import python from "../assets/python.jpg";
import Tailwind from "../assets/tailwind.png";
import Sass from "../assets/sass.png";
import Bootstrap from "../assets/bootstrap.png";
import Next from "../assets/next-js.svg";
import Redux from "../assets/redux.svg";
import Jest from "../assets/jest.png";
import Cypress from "../assets/cypress.png";
import BDD from "../assets/bdd.png";
import Git from "../assets/git.png";
import Typescript from "../assets/typescript.png";
import Figma from "../assets/figma.svg";
import GCP from "../assets/gcp.png";
import Express from "../assets/express-js.png";
import ReactNative from "../assets/react_native.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
const Skills = () => {
  return (
    <div
      className="w-full h-[100%] text-gray-300 min-h-screen"
      style={{ background: "rgba(0,0,0,0.9)" }}
    >
      <div name="skills" className="p-10"></div>
      <ScrollAnimation animateIn="fadeIn" duration={2.1}>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-20">
            <p className="text-4xl font-bold inline border-b-4 border-regal-brown">
              My Tech Stack
            </p>
            <p className="py-4 text-xl ">
              These are the technologies I've worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img
                  className="w-16 mx-auto"
                  src={generative}
                  alt="generative icon"
                />
                <p className="my-4">GENERATIVE AI</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={python} alt="python icon" />
                <p className="my-4">PYTHON</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={CSS} alt="HTML icon" />
                <p className="my-4">CSS</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img
                  className="w-16 mx-auto"
                  src={JavaScript}
                  alt="HTML icon"
                />
                <p className="my-4">JAVASCRIPT</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={ReactImg} alt="HTML icon" />
                <p className="my-4">REACT</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={GitHub} alt="HTML icon" />
                <p className="my-4">GITHUB</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Node} alt="HTML icon" />
                <p className="my-4">NODE JS</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Tailwind} alt="HTML icon" />
                <p className="my-4">TAILWIND</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={FireBase} alt="HTML icon" />
                <p className="my-4">FIREBASE</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Sass} alt="HTML icon" />
                <p className="my-4">SASS</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Bootstrap} alt="HTML icon" />
                <p className="my-4">BOOTSTRAP</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Next} alt="HTML icon" />
                <p className="my-4">NEXT JS</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Redux} alt="HTML icon" />
                <p className="my-4">REDUX</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Jest} alt="HTML icon" />
                <p className="my-4">JEST</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Cypress} alt="HTML icon" />
                <p className="my-4">CYPRESS</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={BDD} alt="HTML icon" />
                <p className="my-4">BDD (CUCUMBER)</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Git} alt="HTML icon" />
                <p className="my-4">GIT</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img
                  className="w-16 mx-auto"
                  src={Typescript}
                  alt="HTML icon"
                />
                <p className="my-4">TYPESCRIPT</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Figma} alt="HTML icon" />
                <p className="my-4">FIGMA</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={GCP} alt="HTML icon" />
                <p className="my-4">GCP</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img className="w-16 mx-auto" src={Express} alt="HTML icon" />
                <p className="my-4">EXPRESS JS</p>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 flex justify-center items-center">
              <div>
                <img
                  className="w-16 mx-auto"
                  src={ReactNative}
                  alt="HTML icon"
                />
                <p className="my-4">REACT NATIVE</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Skills;
