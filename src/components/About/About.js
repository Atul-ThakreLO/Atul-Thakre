import React, { useEffect, useRef } from "react";
import ResumeLink from "../ResumeLink";
import Skills from "./Skills/skills";
import ProgressSkills from "./Progress/ProgressSkills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

function About(props) {
  function handleHover(innerText, cursorStyles) {
    props.onHoverStyles(innerText, cursorStyles);
  }
  useGSAP(() => {
    gsap.from(".para", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".para",
        start: "top 60%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
    gsap.from(".button", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".button",
        start: "top 60%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });
  return (
    <div>
      <div className="bg-zinc-900 w-full mt-40 rounded-t-3xl pb-16">
        <div className="w-[90%] mx-auto text-white py-6 lg:py-10 lg:px-20">
          <p className="para py-6 px-4 lg:py-10 lg:px-24 text-3xl lg:text-4xl font-[200] text-justify lg:text-center">
            The web is a powerful platform for connection and innovation. I'm
            thrilled to be a part of building the future of the web, one line of
            code at a time. Let's collaborate and create something amazing!
          </p>
          <div className="w-max flex flex-col sm:flex-row mx-auto mt-10 text-xl button">
            <a
              href="https://www.linkedin.com/in/atul-thakre-logers/"
              target="_blank"
              className="p-4 border-2 w-full sm:w-auto mb-10 bg-[#71967d] border-[#71967d] rounded-full mr-5 hover:bg-transparent duration-300"
            >
              <span className="ml-10 sm:ml-4 inline-block">Connect me</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="35"
                fill="currentColor"
                className="inline-block mx-4 mb-1"
                viewBox="0 0 16 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                />
                <path
                  fillRule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </a>
            <ResumeLink />
          </div>
        </div>
        <Skills />
      </div>
      <ProgressSkills onHover={handleHover} />
    </div>
  );
}

export default About;
