import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bdryoyqb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <ScrollAnimation animateIn="fadeIn" duration={2.1}>
            <p className="text-4xl font-bold inline border-b-4 border-regal-brown text-gray-300">
              Contact
            </p>
          </ScrollAnimation>
          <p className="text-gray-300 py-4"></p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          required
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-regal-brown hover:border-regal-brown px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
